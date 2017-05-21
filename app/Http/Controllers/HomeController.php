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
}
