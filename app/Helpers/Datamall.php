<?php

namespace eien\Helpers;

use GuzzleHttp\Client;
use Illuminate\Support\Facades\Cache;

class Datamall
{
    /**
     * Guzzle client instance.
     *
     * @var \GuzzleHttp\Client
     */
    protected $guzzle;

    /**
     * API endpoint to interact with.
     *
     * @var string
     */
    protected $apiEndpoint;

    /**
     * API Key
     *
     * @var mixed
     */
    protected $accountKey;

    /**
     * @var string
     */
    protected $requestUri;

    /**
     * Guzzle request headers (usually only AccountKey goes here).
     *
     * @var string
     */
    protected $headers;

    /**
     * @var
     */
    protected $busStopId;

    /**
     * Singapore standard time.
     *
     * @var string
     */
    protected $sst = 'True';

    /**
     * @var int
     */
    protected $serviceNo;

    /**
     * @param \GuzzleHttp\Client $guzzle
     */
    public function __construct(Client $guzzle)
    {
        $this->apiEndpoint = 'http://datamall2.mytransport.sg/ltaodataservice/BusArrival';
        $this->accountKey = env('LTA_DATAMALL_API_KEY');
        $this->guzzle = $guzzle;
    }

    /**
     * @param $busStopId
     * @return $this
     */
    public function busStop($busStopId)
    {
        $this->busStopId = $busStopId;

        return $this;
    }

    /**
     * @param bool $sst
     * @return $this
     */
    public function isSst($sst)
    {
        $this->sst = $sst ? "True" : "False";

        return $this;
    }

    /**
     * @return $this
     */
    public function prepare()
    {
        $this->requestUri = $this->apiEndpoint . '?BusStopID=' . $this->busStopId . '&SST=' . $this->sst;

        $this->headers = [
            'headers' => [
                'AccountKey' => $this->accountKey,
            ],
        ];

        return $this;
    }

    /**
     * @param $serviceNo
     * @return $this
     */
    public function withBus($serviceNo)
    {
        $this->requestUri .= '&ServiceNo=' . $serviceNo;

        return $this;
    }

    /**
     * Store requests in cache if possible.
     * Datamall's update frequency for arrival is 1 minute, so 30 seconds is acceptable.
     *
     * @return mixed
     */
    public function get()
    {
        return Cache::remember('bus:datamall:' . $this->busStopId, 0.5, function () {

            $response = $this->guzzle->request('GET', $this->requestUri, $this->headers)
                                     ->getBody()
                                     ->getContents();

            return json_decode($response)->Services;
        });
    }
}
