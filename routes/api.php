<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => '/v1', 'middleware' => 'auth:api'], function () {
    Route::get('test', 'HomeController@index');
    Route::post('testing/{id}', function (Request $request, $id) {
        return Response::json([
            'id' => $id,
            'token' => $request->input('api_token'),
            'user' => Auth::guard('api')->id(),
            'user2' => auth()->guard('api')->id()
        ]);
    });
});

Route::get('user/{user}', function (eien\User $user) {
    dd($user);
});