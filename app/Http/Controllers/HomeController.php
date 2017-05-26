<?php

namespace eien\Http\Controllers;

class HomeController extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('main.index');
    }


    /**
     * @return \Illuminate\Http\Response
     */
    public function about()
    {
        return view('main.about');
    }

    public function toggleLang()
    {
        if (app()->isLocale('en')) {
            session()->put('locale', 'jp');
        } else {
            session()->put('locale', 'en');
        }

        return back();
    }
}
