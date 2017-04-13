<?php

namespace eien\Http\Controllers\Auth;

use eien\Http\Controllers\Controller;
use eien\Http\Requests\ValidateSecretRequest;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest', ['except' => 'logout']);
    }

    /**
     * @return string
     */
    public function username()
    {
        return 'username';
    }

    /**
     * @param Request $request
     * @param $user
     * @return \Illuminate\Http\Response
     */
    public function authenticated(Request $request, Authenticatable $user)
    {
        if ($user->twofa_secret) {
            Auth::logout();

            $request->session()
                    ->put('2fa:user:id', $user->id);

            return redirect('TFA/validate');
        }

        return redirect()->intended($this->redirectTo);
    }

    /**
     * @return \Illuminate\Http\Response
     */
    public function getValidateToken()
    {
        if (session('2fa:user:id')) {
            return view('TFA.validate');
        }

        return redirect('login');
    }

    /**
     * Once the token is successfully validated, store it to the blacklist,
     * and log the user in.
     *
     * @param ValidateSecretRequest $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function validateToken(ValidateSecretRequest $request)
    {
        $userId = $request->session()
                          ->pull('2fa:user:id');
        $key = $userId . ':' . $request->totp;

        // Store token to a blacklist. Cache timing matches how old codes are allowed
        // by the 2FA library.
        Cache::add($key, true, 3);

        Auth::loginUsingId($userId);

        return redirect()->intended($this->redirectTo);
    }
}
