<?php

use eien\Helpers\BusScheduler;
use eien\User;

Artisan::command('eien:fetch-eta', function (BusScheduler $busScheduler) {
    $this->info('Fetching ETAs...');
    $users = User::has('watchlist')
                 ->pluck('id');

    foreach ($users as $user) {
        $busScheduler->fetchArrivals($user);
    }
})->describe('Fetch arrivals');

