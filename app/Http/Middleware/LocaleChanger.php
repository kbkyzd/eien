<?php

namespace eien\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Session;

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
        $locale = Session::get('locale');
        if ($locale === 'jp') {
            App::setLocale('jp');
        } else {
            App::setLocale('en');
        }

        return $next($request);
    }
}
