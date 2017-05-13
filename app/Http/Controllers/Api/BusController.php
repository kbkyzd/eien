<?php

namespace eien\Http\Controllers\Api;

use eien\Helpers\Cached;
use eien\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BusController extends Controller
{
    public function service(Request $request, Cached $cached)
    {
        $busNo = $request->busNo;
        $busServiceObject = $cached->getAsJson('bus-services');

        foreach ($busServiceObject->services as $bus) {
            if ($bus->no === $busNo) {
                return response()->json($bus);
            }
        }
    }

    public function stop(Request $request, Cached $cached)
    {
        $stopNo = $request->stopNo;
        $stopObject = $cached->getAsJson('bus-stops');

        foreach ($stopObject as $stop) {
            if ($stop->no === $stopNo) {
                return response()->json($stop);
            }
        }
    }

    public function stopService(Request $request, Cached $cached)
    {
        $stopNo = $request->stopNo;
        $stopObject = $cached->getAsJson('bus-stops-services');

        foreach ($stopObject as $stop => $bus) {
            if ($stop === $stopNo) {
                return response()->json($bus);
            }
        }
    }

    public function busService(Request $request, Cached $cached)
    {
        $busNo = $request->busNo;
        $mode = $request->mode;

        $busObject = $cached->getAsJson('bus-services/' . $busNo);

        switch ($mode) {
            case 'route':
                return response()->json($busObject->{'1'}->route);
                break;
            case 'stop':
                return response()->json($busObject->{'1'}->stops);
                break;
            default:
                return response()->json(['error' => 'File not found.'], 404);
        }
    }
}
