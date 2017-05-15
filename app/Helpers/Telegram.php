<?php

namespace eien\Helpers;

use eien\User;
use GuzzleHttp\Client;

class Telegram
{
    public function getUpdates(Client $guzzle)
    {
        $telegramUri = "https://api.telegram.org/bot" . config('services.telegram-bot-api.token') . "/getUpdates";

        return json_decode($guzzle->request('GET', $telegramUri)
                                  ->getBody()
                                  ->getContents());
    }
}
