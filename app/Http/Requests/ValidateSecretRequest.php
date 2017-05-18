<?php

namespace eien\Http\Requests;

use eien\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Cache;
use Illuminate\Validation\Factory as ValidationFactory;
use PragmaRX\Google2FA\Vendor\Laravel\Facade as Google2FA;

class ValidateSecretRequest extends FormRequest
{
    /**
     * @var \eien\User
     */
    private $user;

    /**
     * 2FA Validator
     *
     * @param ValidationFactory $factory
     */
    public function __construct(ValidationFactory $factory)
    {
        $factory->extend('valid_token', function ($attribute, $value, $parameters, $validator) {
            $secret = $this->user->twofa_secret;

            return Google2FA::verifyKey($secret, $value, 3);
        });

        // valid_token is self-explanatory, used_token makes sures used tokens can't be
        // reused by adding them to a blacklist (cache).
        $factory->extend('used_token', function ($attribute, $value, $parameters, $validator) {
            $key = $this->user->id . ':' . $value;

            return !Cache::has($key);
        });
    }

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        try {
            $this->user = User::findOrFail(session('2fa:user:id'));
        } catch (\Exception $ex) {
            return false;
        }

        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'totp' => 'bail|required|digits:6|valid_token|used_token',
        ];
    }
}
