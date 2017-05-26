<?php

namespace eien\Helpers;

use Carbon\Carbon;
use eien\BusWatchList;
use eien\Notifications\sendBusSchedule;
use eien\User;
use Illuminate\Support\Facades\Cache;

class BusScheduler
{
    /**
     * @var \eien\Helpers\Datamall
     */
    protected $datamall;

    /**
     * @param \eien\Helpers\Datamall $datamall
     */
    public function __construct(Datamall $datamall)
    {
        $this->datamall = $datamall;
    }

    /**
     * One of the most cancerous things I've ever written
     *
     * @param $userId
     * @param int $arrivesIn
     */
    public function fetchArrivals($userId, $arrivesIn = 420)
    {
        $user = User::findOrFail($userId);
        if (!$user->telegram_id) return;

        $watchList = BusWatchList::where([
            [
                'user_id',
                $user->id,
            ],
            [
                'notify',
                1,
            ],
        ])->get();

        $arrivals = $arriving = [];
        $message = '';

        // Map
        foreach ($watchList as $watched) {
//            $firstRange = Carbon::parse($watched->start);
//            $secondRange = Carbon::parse($watched->stop);
//
//            if (Carbon::now()->between($firstRange, $secondRange)) {
                $arrivals[$watched->bus_service] = $this->datamall->busStop($watched->bus_stop_id)
                                                                  ->prepare()
                                                                  ->getBus($watched->bus_service);
//            }
        }

        // Reduce
        foreach ($arrivals as $arrival) {
            $diff = Carbon::parse($arrival->NextBus->EstimatedArrival)->diffInSeconds();

            if ($diff < $arrivesIn) {
                $arriving[] = $arrival;
            }
        }

        if ($this->hasANotificationBeenRecentlySent($userId)) return;
        if (empty($arriving)) return;

        foreach ($arriving as $arrive) {
            // ETA
            $eta = Carbon::parse($arrive->NextBus->EstimatedArrival)->diffForHumans();
            $etaSubsequent = Carbon::parse($arrive->SubsequentBus->EstimatedArrival)->diffForHumans(null, true);
            $etaSubsequent3 = Carbon::parse($arrive->SubsequentBus3->EstimatedArrival)->diffForHumans(null, true);

            if (str_contains($eta, 'ago')) {
                $eta = 'Just left!';
            }

            $message .= "*" . $arrive->ServiceNo . "\n---\n";
            $message .= "*Arrives in: *" . $eta . "*\n";
            $message .= "Current load: " . $arrive->NextBus->Load . "\n";
            $message .= "Subsequent buses: *" . $etaSubsequent . "*, *" . $etaSubsequent3 . "*\n";
            $message .= "==================\n\n";
        }

        $user->notify(new sendBusSchedule("Hey " . $user->name . ", these following buses are on their way!\n\n" . $message));
    }

    /**
     * Don't send more than 1 notification every x minutes
     *
     * @param $userId
     * @return bool
     */
    public function hasANotificationBeenRecentlySent($userId)
    {
        $expiresIn = Carbon::now()
                           ->addMinutes(10);

        return !Cache::add('users:notifications:just:' . $userId, 1, $expiresIn);
    }

}
