<?php

namespace eien\Http\Controllers;

use Carbon\Carbon;
use eien\BusWatchList;
use eien\Helpers\{
    BusSearch, Cached, Datamall
};
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class BusController extends Controller
{
    /**
     * @var \eien\Helpers\Cached
     */
    protected $cached;

    public function __construct(Cached $cached)
    {
        $this->cached = $cached;
    }

    /**
     * @param \Illuminate\Http\Request $request
     * @param \eien\Helpers\Datamall $datamall
     * @return $this
     */
    public function index(Request $request, Datamall $datamall)
    {
        $user = $request->user();
        $watchList = BusWatchList::where('user_id', $user->id)
                                 ->get();

        $arrivals = [];
        $eta = [];

        foreach ($watchList as $watched) {
            $arrivals[$watched->bus_service] = $datamall->busStop($watched->bus_stop_id)
                                                        ->prepare()
                                                        ->getBus($watched->bus_service);
        }

        foreach ($arrivals as $arrival) {
            if ($arrival->Status === 'Not In Operation') {
                $eta[] = 'Not In Operation';
                continue;
            }
            $eta[] = new Carbon($arrival->NextBus->EstimatedArrival);
        }

        return view('bus.dashboard')->with([
            'watchlist' => $watchList,
            'eta'       => $eta,
        ]);
    }

    public function searchServices(Request $request, BusSearch $busSearch)
    {
        $result = $busSearch->searchServices($request->service, $this->cached);

        return view('bus.searchservices')->with('services', $result);
    }

    public function searchStops(Request $request, BusSearch $busSearch)
    {
        $result = $busSearch->searchStops($request->stop, $this->cached);

        return view('bus.searchstops')->with('services', $result);
    }

    public function autocomplete()
    {
        $data = $this->cached->getAsJson('bus-stops');

        $cache = Cache::remember('bus-data:autocomplete', 1440, function () use ($data) {
            $jsonObject = [];
            foreach ($data as $d) {
                $jsonObject[$d->no] = null;
            }

            return $jsonObject;
        });

        return response()
            ->json($cache, 200, ['Cache-Control' => 'public, max-age=604800']);
    }
}
