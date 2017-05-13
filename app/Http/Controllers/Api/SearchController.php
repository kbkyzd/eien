<?php

namespace eien\Http\Controllers\Api;

use eien\Helpers\Cached;
use eien\Http\Controllers\Controller;
use Illuminate\Http\Request;
use wataridori\SFS\SimpleFuzzySearch;

class SearchController extends Controller
{
    public function searchServices(Request $request, Cached $cached)
    {
        $query = $request->q;
        $serviceObj = $cached->getAsArray('bus-services');

        $sfs = new SimpleFuzzySearch($serviceObj['services'], ['name']);
        $results = $sfs->search($query);

        return response()->json($results);
    }

    public function searchStops(Request $request, Cached $cached)
    {
        $query = $request->q;
        $serviceObj = $cached->getAsArray('bus-stops');

        $sfs = new SimpleFuzzySearch($serviceObj, ['name', 'no']);
        $results = $sfs->search($query);

        return response()->json($results);
    }
}
