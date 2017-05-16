<?php

// Home
Route::get('/', function () {
    return view('main.index');
});

// Auth Routes
Auth::routes();

/** Generic routes for static pages (i.e. About us/me) */
Route::get('index', 'HomeController@index');
Route::get('about', 'HomeController@about');


/**
 * User related routes
 * (e.g. Configurations, settings, profiles etc) -- should be grouped
 */
Route::group(['prefix' => 'user', 'middleware' => 'auth'], function () {
    Route::get('profile', 'UserController@showProfile')->name('user.profile');


    /** User Config */
    Route::group(['prefix' => 'settings'], function () {
        /** Main View Routes */
        /** ---------------- */
        Route::get('/', 'Settings\ProfileController@account')->name('settings.account');

        Route::group(['prefix' => 'security'], function () {
            Route::get('/', 'Settings\ProfileController@security')->name('settings.security');
        });

        Route::group(['prefix' => 'session'], function () {
            Route::get('/', 'Settings\ProfileController@session')->name('settings.session');
            Route::post('/', 'Settings\ProfileController@sessionLogout');
        });

        /** Config Routes */
        Route::group(['prefix' => 'telegram'], function () {
            Route::get('generatesecret', 'TelegramController@regenerateSecret')->name('settings.telegram.generatesecret');
            Route::get('disable', 'TelegramController@disable')->name('settings.telegram.disable');
            Route::get('sendTest', 'TelegramController@sendTestMessage')->name('settings.telegram.sendtest');
            Route::post('verify', 'TelegramController@verifyUser')->name('settings.telegram.verify');
        });
        
        Route::post('/', 'Settings\ProfileController@editSettings');
    });

});

/**
 * Two factor Authentication
 * Token validation is throttled to 5 req/min.
 */
Route::group(['prefix' => 'TFA'], function () {
    Route::get('enable', 'TFAController@enable')->name('tfa.enable');
    Route::get('disable', 'TFAController@disable')->name('tfa.disable');
    Route::get('validate', 'Auth\LoginController@getValidateToken');
    Route::post('validate', [
        'middleware' => 'throttle:5',
        'uses'       => 'Auth\LoginController@validateToken',
    ]);
});

/**
 * Administration related routes
 */
Route::group(['prefix' => 'eien', 'middleware' => ['auth', 'acl'], 'is' => 'root|mod' ], function () {
    Route::get('/', function () {
    });
});


Route::group(['prefix' => 'bus'], function () {
    Route::group(['prefix' => 'raw'], function () {
        Route::get('{file}', 'RawBusDataController@view');
    });
});
