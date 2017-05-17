<?php

namespace eien\Http\Controllers\Api;

use eien\Helpers\Cached;
use eien\Helpers\Datamall;
use eien\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BusController extends Controller
{
    /**
     * @param \Illuminate\Http\Request $request
     * @param \eien\Helpers\Cached $cached
     * @return \Illuminate\Http\JsonResponse
     */
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

    /**
     * @param \Illuminate\Http\Request $request
     * @param \eien\Helpers\Cached $cached
     * @return \Illuminate\Http\JsonResponse
     */
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

    /**
     * @param \Illuminate\Http\Request $request
     * @param \eien\Helpers\Cached $cached
     * @return \Illuminate\Http\JsonResponse
     */
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

    /**
     * @param \Illuminate\Http\Request $request
     * @param \eien\Helpers\Cached $cached
     * @return \Illuminate\Http\JsonResponse
     */
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

    /**
     * @param \Illuminate\Http\Request $request
     * @param \eien\Helpers\Datamall $datamall
     * @return \Illuminate\Http\JsonResponse
     */
    public function arrival(Request $request, Datamall $datamall)
    {
        $busStop = $request->busStop;
        $arrival = $datamall->busStop($busStop)
                            ->prepare();

        if ($request->no) {
            $arrival->withBus($request->no);
        }

        return response()->json($arrival->get());
    }
}
