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
        $secretToken = $request->user()->ot_token->ot_token;

        $botResponse = $telegram->getUpdates($guzzle);
        foreach ($botResponse->result as $botResult) {
            // Verify token and username matches
            if ($botResult->message->text === $secretToken && $botResult->message->from->username === $telegramUsername) {
                $user = $request->user();

                $user->telegram_username = $telegramUsername;
                $user->telegram_id = $botResult->message->from->id;
                $user->save();

                $user->notify(new sendTelegram("*Hello!*\nYour account has been verified under " . $request->user()->username ." \xF0\x9F\x91\x8C"));

                return redirect()
                    ->route('settings.account')
                    ->with('status-success', 'Verified.');
            }
        }

        return redirect()
            ->route('settings.account')
            ->with('status-error', 'Failed to verify token.');
    }

    public function disable(Request $request)
    {
        $user = $request->user();
        $user->telegram_username = null;
        $user->telegram_id = null;
        $user->save();

        return redirect()
            ->route('settings.account')
            ->with('status-success', 'Deleted.');
    }

    public function regenerateSecret(Request $request, TelegramToken $telegramToken)
    {
        $user = $request->user();
        $secret = bin2hex(random_bytes(10));

        if ($user->ot_token) {
            $user->ot_token->delete();
        }

        $telegramToken->user_id = $user->id;
        $telegramToken->ot_token = $secret;
        $telegramToken->save();

        return back();
    }

    public function sendTestMessage(Request $request)
    {
        $user = $request->user();
        $user->notify(new sendTelegram('This is a test message.'));

        return back()->with('status-success', 'Test message sent.');
    }
}
