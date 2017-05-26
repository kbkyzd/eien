<?php

namespace eien\Helpers;

use wataridori\SFS\SimpleFuzzySearch;

class BusSearch
{
    public function searchServices($query, Cached $cached)
    {
        $serviceObject = $cached->getAsArray('bus-services');

        $sfs = new SimpleFuzzySearch($serviceObject['services'], [
            'name',
            'no',
            'operator'
        ]);
        $results = $sfs->search($query);

        return $results;
    }

    public function searchStops($query, Cached $cached)
    {
        $stopObject = $cached->getAsArray('bus-stops');

        $sfs = new SimpleFuzzySearch($stopObject, [
            'name',
            'no',
        ]);
        $results = $sfs->search($query);

        return $results;
    }
}
