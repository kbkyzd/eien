<?php

namespace eien\Listeners;

use eien\Events\Telegramed;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use eien\Notifications\TelegramTest;
use Illuminate\Support\Facades\Notification;

class SendTelegram implements ShouldQueue
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  Telegramed  $event
     * @return void
     */
    public function handle(Telegramed $event)
    {
        Notification::send('', new TelegramTest('same tbqh fam'));
    }
}
