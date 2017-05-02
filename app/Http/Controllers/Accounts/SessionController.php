<?php

namespace eien\Http\Controllers\Accounts;

use eien\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class SessionController extends Controller
{
    public function view()
    {
        $sessions = DB::table('sessions')->where('user_id', '=', Auth::id())->get();
        dd($sessions);
        return view('test');
    }
}
