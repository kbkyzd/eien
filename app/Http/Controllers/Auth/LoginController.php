<?php

namespace eien\Http\Controllers\Auth;

use eien\Http\Controllers\Controller;
use eien\Http\Requests\ValidateSecretRequest;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Http\Request;

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

    public function username()
    {
        return 'username';
    }

    /**
     * @param Request $request
     * @param $user
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function authenticated(Request $request, Authenticatable $user)
    {
        if ($user->twofa_secret) {
            Auth::logout();

            $request->session()->put('2fa:user:id', $user->id);
            return redirect('TFA/validate');
        }

        return redirect()->intended($this->redirectTo);
    }

    public function getValidateToken()
    {
        if (session('2fa:user:id')) {
            return view('TFA.validate');
        }

        return redirect('login');
    }

    public function validateToken(ValidateSecretRequest $request)
    {
        $userId = $request->session()->pull('2fa:user:id');
        $key = $userId . ':' . $request->totp;

        Cache::add($key, true, 4);

        Auth::loginUsingId($userId);
        return redirect()->intended($this->redirectTo);
    }
}
