<?php

namespace eien\Helpers;

use Illuminate\Support\Facades\Cache;

class Geo
{
    public function __construct()
    {

    }

    public function reverseObject($lat, $long)
    {
        return Cache::remember('geo:' . $lat . '-' . $long, 240, function () use ($lat, $long) {
            return app('geocoder')
                ->reverse($lat, $long)
                ->get()
                ->first();
        });
    }
}
