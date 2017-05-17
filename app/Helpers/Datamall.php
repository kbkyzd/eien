<?php

namespace eien\Helpers;

use GuzzleHttp\Client;

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
     * @var
     */
    protected $busStopId;

    /**
     * Singapore standard time.
     *
     * @var bool
     */
    protected $sst = true;

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
    public function sst($sst)
    {
        $this->sst = $sst ? "True" : "False";

        return $this;
    }

    /**
     * @return $this
     */
    public function fetch()
    {
        $this->requestUri = $this->apiEndpoint . '?BusStopID=' . $this->busStopId . '&SST=' . $this->sst;

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
     * @return mixed
     */
    public function get()
    {
        $headers = [
            'headers' => [
                'AccountKey' => $this->accountKey,
            ],
        ];

        $response = $this->guzzle->request('GET', $this->requestUri, $headers)
                                 ->getBody()
                                 ->getContents();

        return json_decode($response)->Services;
    }
}