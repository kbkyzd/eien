<?php

namespace eien\Http\Controllers;

use Carbon\Carbon;
use Cornford\Googlmapper\Facades\MapperFacade as Mapper;
use eien\BusWatchList;
use eien\Helpers\Cached;
use eien\Helpers\Geo;
use Illuminate\Http\Request;

class BusListController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $lists = BusWatchList::where('user_id', $request->user()->id)
                             ->get();

        return view('bus.list')->with('lists', $lists);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request, Cached $cached)
    {
        $stop = $request->stop;
        $bus = $request->bus;

        $stopObject = $cached->getAsJson('bus-stops');

        foreach ($stopObject as $s) {
            if ($s->no === $stop) {
                $stopInfo = $s;
                break;
            }
        }

        $newWatchList = new BusWatchList;

        $newWatchList->name = $stopInfo->name . ', ' . $bus;
        $newWatchList->description = 'Added on ' . Carbon::now();
        $newWatchList->user_id = $request->user()->id;
        $newWatchList->bus_stop_id = $stop;
        $newWatchList->bus_service = $bus;

        $newWatchList->save();

        return redirect()
            ->route('bus.dashboard')
            ->with('status-success', 'Added!');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \Illuminate\Http\Request $request
     * @param \eien\Helpers\Cached $cached
     * @param \eien\Helpers\Geo $geo
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request, Cached $cached, Geo $geo)
    {
        $id = $request->id;
        $lists = BusWatchList::findOrFail($id);

        $this->authorize('edit', $lists);

        $stopInfo = [];
        $stopObject = $cached->getAsJson('bus-stops');

        foreach ($stopObject as $stop) {
            if ($stop->no === $lists->bus_stop_id) {
                $stopInfo = $stop;
                break;
            }
        }

        $approxCoords = $geo->reverseObject($stopInfo->lat, $stopInfo->lng);

        Mapper::map($stopInfo->lat, $stopInfo->lng, ['zoom' => 20]);

        return view('bus.listedit')->with([
            'lists'  => $lists,
            'coords' => $approxCoords,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $this->validate($request, [
            'list_name'        => 'required|max:80',
            'list_description' => 'required',
            'start_time'       => 'required',
            'end_time'         => 'required',
        ]);

        $watchlist = BusWatchList::findOrFail($request->id);
        $this->authorize('edit', $watchlist);

        $watchlist->name = $request->list_name;
        $watchlist->description = $request->list_description;
        $watchlist->start = $request->start_time;
        $watchlist->end = $request->end_time;

        $watchlist->notify = $request->notify === 'on' ? 1 : 0;

        $watchlist->save();

        return back()->with('status-success', 'Entry updated!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $watchlist = BusWatchList::findOrFail($request->watch_id);
        $this->authorize('delete', $watchlist);

        $watchlist->delete();

        return redirect()->route('bus.list.view')->with('status-success', 'Deleted!');
    }

    /**
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function toggleNotification(Request $request)
    {
        $watchId = $request->watch_id;
        $watchList = BusWatchList::findOrFail($watchId);

        $val = (bool)$watchList->notify;
        $watchList->notify = (int)!$val;
        $watchList->save();

        return back();
    }
}
