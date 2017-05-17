<?php

namespace eien\Http\Controllers;

use eien\Helpers\Datamall;
use GuzzleHttp\Client;

class BusController extends Controller
{
    public function index()
    {
        return view('bus.dashboard');
    }
}
