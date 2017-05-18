<?php

namespace eien\Helpers;

class Polymapper
{
    /**
     * @var \stdClass
     */
    protected $polyObject;

    /**
     * @var array
     */
    protected $coordinates = [];

    /**
     * @var array
     */
    protected $latitudes = [];

    /**
     * @var array
     */
    protected $longitudes = [];

    /**
     * @var array
     */
    protected $polyCoordinates = [];

    /**
     * Convert routes from the raw scrapes into something Googlmapper can consume.
     *
     * @param \stdClass $polyObject
     * @return array
     */
    public function polyfy(\stdClass $polyObject)
    {
        $this->polyObject = $polyObject;

        foreach ($this->polyObject->{'1'}->route as $route) {
            $this->coordinates[] = $route;
        }

        // If a 2nd route exists
        if (!empty($this->polyObject->{'2'}->route)) {
            foreach ($this->polyObject->{'2'}->route as $route) {
                $this->coordinates[] = $route;
            }
        }

        foreach ($this->coordinates as $coord) {
            list($this->latitudes[], $this->longitudes[]) = explode(',', $coord);
        }

        for ($i = 0; $i < count($this->latitudes); $i++) {
            $this->polyCoordinates[] = [
                'latitude'  => (float)$this->latitudes[$i],
                'longitude' => (float)$this->longitudes[$i],
            ];
        }

        return $this->polyCoordinates;
    }

    /**
     * Get the starting latitude.
     *
     * @return mixed
     */
    public function firstLat()
    {
        return $this->latitudes[0];
    }

    /**
     * Get the starting longitude.
     *
     * @return mixed
     */
    public function firstLong()
    {
        return $this->longitudes[0];
    }
}
