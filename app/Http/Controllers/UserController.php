<?php

namespace eien\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function showProfile()
    {
        $last_activity = DB::table('sessions')
                           ->where('user_id', Auth::user()->id)
                           ->value('last_activity');

        $diff = Carbon::createFromTimestamp($last_activity)
                      ->diffForHumans();

        return view('main.user.profile')->with('diff', $diff);
    }
}
