<?php

use Illuminate\Http\Request;

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