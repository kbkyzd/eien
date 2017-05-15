<?php

namespace eien\Http\Controllers;

use eien\Helpers\Telegram;
use eien\Notifications\sendTelegram;
use eien\TelegramToken;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TelegramController extends Controller
{
    public function verifyUser(Request $request, Telegram $telegram, Client $guzzle)
    {
        $telegramUsername = $request->telegram_username;
        $secretToken = Auth::user()->ot_token->ot_token;

        $botResponse = $telegram->getUpdates($guzzle);
        foreach ($botResponse->result as $botResult) {
            // Verify token and username matches
            if ($botResult->message->text === $secretToken && $botResult->message->from->username === $telegramUsername) {
                $user = Auth::user();

                $user->telegram_username = $telegramUsername;
                $user->telegram_id = $botResult->message->from->id;
                $user->save();

                return redirect()
                    ->route('settings.account')
                    ->with('status-success', 'Verified.');
            }
        }

        return redirect()
            ->route('settings.account')
            ->with('status-error', 'Failed to verify token.');
    }

    public function disable()
    {
        $user = Auth::user();
        $user->telegram_username = null;
        $user->telegram_id = null;
        $user->save();

        return redirect()
            ->route('settings.account')
            ->with('status-success', 'Deleted.');
    }

    public function regenerateSecret(TelegramToken $telegramToken)
    {
        $user = Auth::user();
        $secret = bin2hex(random_bytes(10));

        if ($user->ot_token) {
            $user->ot_token->delete();
        }

        $telegramToken->user_id = $user->id;
        $telegramToken->ot_token = $secret;
        $telegramToken->save();

        return back();
    }

    public function sendTestMessage()
    {
        $user = Auth::user();
        $user->notify(new sendTelegram('This is a test message.'));

        return back()->with('status-success', 'Test message sent.');
    }
}
