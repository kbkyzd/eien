<?php

namespace eien\Helpers;

use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Storage;

class Cached
{
    /**
     * @param string $fileName
     * @return mixed
     */
    public function retrieveBusRaw($fileName)
    {
        return Cache::remember('bus-data:' . $fileName, config('cache.bus_cache_duration'), function () use ($fileName) {
            return Storage::get($fileName . '.json');
        });
    }

    /**
     * @param string $fileName
     * @return mixed
     */
    public function getAsJson($fileName)
    {
        return json_decode($this->retrieveBusRaw($fileName));
    }

    /**
     * @param string $fileName
     * @return mixed
     */
    public function getAsArray($fileName)
    {
        return json_decode($this->retrieveBusRaw($fileName), true);
    }
}