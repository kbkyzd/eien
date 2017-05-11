<?php

namespace eien\Helpers;

use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class Session
{

    /**
     * @return mixed
     */
    public function getCurrentUserSessions()
    {
        return DB::table('sessions')
                 ->where('user_id', Auth::user()->id)
                 ->get();
    }

    public function lastSeen($sessionId)
    {
        $last_activity = DB::table('sessions')
                           ->where('id', $sessionId)
                           ->value('last_activity');

        return $diff = Carbon::createFromTimestamp($last_activity)
                             ->diffForHumans();
    }

    public function removeSession($sessionId)
    {
        DB::table('sessions')
          ->where('id', $sessionId)
          ->delete();
    }
}