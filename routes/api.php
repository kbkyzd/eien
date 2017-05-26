<?php

/**
 * v1 API Route
 */

Route::group(['prefix' => '/v1', 'middleware' => 'auth:api'], function () {

    Route::group(['prefix' => 'bus'], function () {

        Route::group(['prefix' => 'raw'], function () {
            Route::get('{file}/{busNo?}', 'RawBusDataController@view');
        });

        /** Lookup */
        Route::get('service/{busNo}', 'Api\BusController@service');
        Route::get('stop/{stopNo}', 'Api\BusController@stop');
        Route::get('stopService/{stopNo}', 'Api\BusController@stopService');
        Route::get('busService/{mode}/{busNo}', 'Api\BusController@busService');

        /** Fuzzy Search */
        Route::group(['prefix' => 'search'], function () {
            Route::get('service', 'Api\SearchController@searchServices');
            Route::get('stop', 'Api\SearchController@searchStops');
        });

        Route::get('arrival/{busStop}', 'Api\BusController@arrival');
    });

    Route::group(['prefix' => 'sensor'], function () {
        Route::post('tempsAdd', 'Api\SensorController@add');
    });
});


