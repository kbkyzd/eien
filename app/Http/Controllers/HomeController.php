<?php

namespace eien\Http\Controllers;

use eien\Events\Telegramed;
use eien\Notifications\TelegramTest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Facades\Session;
use Carbon\Carbon;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $sessions = DB::table('sessions')->where('user_id', '=', Auth::id())->get();
//        event(new Telegramed());
//        Mail::raw('Message text', function($message) {
//            $message->from('us@example.com', 'Laravel');
//            $message->to('foo@example.com')->cc('bar@example.com');
//        });

        return view('main.home')->with(compact('sessions'));
    }


    public function about()
    {
        return view('main.about');
    }
}
