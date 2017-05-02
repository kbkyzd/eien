<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Home
Route::get('/', function () {
    return view('main.index');
});

// Auth Routes
Auth::routes();

// Main Top-level routes
Route::get('home', 'HomeController@index');
Route::get('about', 'HomeController@about');


/**
 * User related routes
 * (e.g. Configurations, settings, profiles etc) -- should be grouped
 */
Route::group(['prefix' => 'user', 'middleware' => 'auth'], function () {
    Route::get('profile', 'UserController@showProfile');
    Route::group(['prefix' => 'session'], function () {
        Route::get('/', 'Accounts\SessionController@view');
    });
});

/**
 * Two factor Authentication
 * Token validation is throttled to 5 req/min.
 */
Route::group(['prefix' => 'TFA'], function () {
    Route::get('enable', 'TFAController@enable');
    Route::get('disable', 'TFAController@disable');
    Route::get('validate', 'Auth\LoginController@getValidateToken');
    Route::post('validate', [
        'middleware' => 'throttle:5',
        'uses'       => 'Auth\LoginController@validateToken',
    ]);
});
