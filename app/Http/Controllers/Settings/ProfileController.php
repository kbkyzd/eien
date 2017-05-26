<?php

namespace eien\Http\Controllers\Settings;

use eien\BusWatchList;
use eien\Helpers\Session;
use eien\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Jenssegers\Agent\Agent;

class ProfileController extends Controller
{
    public function account()
    {
        return view('settings.account');
    }

    public function security(Request $request)
    {
        $user = $request->user();

        return view('settings.security')->with('user', $user);
    }

    public function editSettings(Request $request)
    {

    }

    public function session(Agent $agent, Session $session)
    {
        $currentUserSessions = $session->getCurrentUserSessions();

        $sessionCollection = collect();

        foreach ($currentUserSessions as $sessions) {
            $agent->setUserAgent($sessions->user_agent);
            $sessionCollection->put($sessions->id, [
                'browser'       => $agent->browser() . ' ' . $agent->version($agent->browser()),
                'platform'      => $agent->platform() . ' ' . $agent->version($agent->platform()),
                'ip_address'    => $sessions->ip_address,
                'last_activity' => $session->lastSeen($sessions->id),
                'raw_useragent' => $sessions->user_agent,
            ]);
        }

        return view('settings.session')->with('sessions', $sessionCollection);
    }

    /**
     * @param \Illuminate\Http\Request $request
     * @param \eien\Helpers\Session $session
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function sessionLogout(Request $request, Session $session)
    {
        if ($request->logoutall) {
            $session->removeAllSessions(auth()->user()->id);

            return redirect('/');
        }

        $sessionId = $request->sessionId;
        $currentId = session()->getId();

        $session->removeSession($sessionId);

        // Destroying current session
        if ($sessionId === $currentId) {
            auth()->logout();

            return redirect('/');
        }

        return back()->with('status-success', 'Session removed.');
    }

    public function enableApiAccess(Request $request)
    {
        $user = $request->user();
        $secret = str_random(60);
        $user->api_token = $secret;
        $user->save();

        return back();
    }
}
