<?php

namespace eien\Http\Controllers\Api;

use eien\Helpers\{
    BusSearch, Cached
};
use eien\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    /**
     * @param \Illuminate\Http\Request $request
     * @param \eien\Helpers\Cached $cached
     * @param \eien\Helpers\BusSearch $search
     * @return \Illuminate\Http\JsonResponse
     */
    public function searchServices(Request $request, Cached $cached, BusSearch $search)
    {
        $results = $search->searchServices($request->q, $cached);

        return response()->json($results);
    }

    /**
     * @param \Illuminate\Http\Request $request
     * @param \eien\Helpers\Cached $cached
     * @param \eien\Helpers\BusSearch $search
     * @return \Illuminate\Http\JsonResponse
     */
    public function searchStops(Request $request, Cached $cached, BusSearch $search)
    {
        $results = $search->searchStops($request->q, $cached);

        return response()->json($results);
    }
}
