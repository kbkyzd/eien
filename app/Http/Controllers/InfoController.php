<?php

namespace eien\Http\Controllers;

use Carbon\Carbon;
use Cornford\Googlmapper\Facades\MapperFacade as Mapper;
use eien\Helpers\Cached;
use eien\Helpers\Datamall;
use eien\Helpers\Geo;
use eien\Helpers\Polymapper;
use eien\SensorRaw;
use Illuminate\Http\Request;

class InfoController extends Controller
{
    protected $cached;
    protected $polymapper;

    public function __construct(Cached $cached, Polymapper $polymapper)
    {
        $this->cached = $cached;
        $this->polymapper = $polymapper;
    }

    public function stops(Request $request, Datamall $datamall, Geo $geo)
    {
        if (!$request->stopId) {
            abort(404, 'Stop not found.');
        }

        if (!$request->bus) { // disgusting
            $this->mapperWithoutRoute($request->stopId);
        } else {
            $this->mapper($request->bus, $request->stopId);
        }


        $stopArrivals = $datamall->busStop($request->stopId)
                                 ->prepare()
                                 ->get();

        $stopObject = $this->cached->getAsJson('bus-stops');

        foreach ($stopObject as $stop) {
            if ($stop->no === $request->stopId) {
                $stopInfo = $stop;
                break;
            }
        }

        if (empty($stopInfo)) {
            abort(404);
        }

        foreach ($stopArrivals as $stopArrival) {
            if (empty($stopArrival->NextBus->EstimatedArrival)) {
                $eta[] = 'Unavailable';
                continue;
            }
            $eta[] = (new Carbon($stopArrival->NextBus->EstimatedArrival))->diffForHumans();
        }

        $approxCoords = $geo->reverseObject($stopInfo->lat, $stopInfo->lng);

        try {
            $ambient = SensorRaw::where('stop', $request->stopId)
                                ->orderBy('id', 'desc')
                                ->take(20)
                                ->get();

        } catch (\Exception $e) {
        }

        return view('bus.info.stops')->with([
            'arrivals'    => $stopArrivals,
            'eta'         => $eta,
            'stopInfo'    => $stopInfo,
            'approxCoord' => $approxCoords,
            'ambient'     => $ambient,
        ]);
    }

    public function mapper($no, $stop)
    {
        $busObject = $this->cached->getAsJson('bus-services/' . $no);
        $poly = $this->polymapper->polyfy($busObject);

        $obj = $this->cached->getAsJson('bus-stops');
        foreach ($obj as $o) {
            if ($o->no === $stop) {
                $lat = (float)$o->lat;
                $long = (float)$o->lng;
            }
        }

        Mapper::map($lat, $long, ['zoom' => 20])
              ->polyline($poly, [
                  'strokeColor'   => '#e91e63 ',
                  'strokeOpacity' => 1,
                  'strokeWeight'  => 3,
              ]);;
    }

    public function mapperWithoutRoute($stop)
    {
        $obj = $this->cached->getAsJson('bus-stops');
        foreach ($obj as $o) {
            if ($o->no === $stop) {
                $lat = (float)$o->lat;
                $long = (float)$o->lng;
            }
        }

        Mapper::map($lat, $long, ['zoom' => 20]);;
    }
}
