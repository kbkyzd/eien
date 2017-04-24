<?php

/**
 * This file is part of the GeocoderLaravel library.
 *
 * (c) Antoine Corcy <contact@sbin.dk>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

use Geocoder\Provider\Chain;
use Geocoder\Provider\GoogleMaps;
use Ivory\HttpAdapter\CurlHttpAdapter;

return [
    'providers' => [
        Chain::class => [
            GoogleMaps::class => [
                'en',
                'us',
                true,
                env('GOOGLE_MAPS_API_KEY'),
            ],
        ],
    ],
    'adapter'   => CurlHttpAdapter::class,
];
