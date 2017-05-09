<?php

namespace eien\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

/**
 * An overly simplistic way to change languages.
 * @package eien\Http\Middleware
 */
class LocaleChanger
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $locale = Session::get('locale', function () {
            if (Auth::check()) {
                return Auth::user()->lang;
            }

            return 'en';
        });

        if ($locale === 'jp') {
            App::setLocale('jp');
        } else {
            App::setLocale('en');
        }

        return $next($request);
    }
}
