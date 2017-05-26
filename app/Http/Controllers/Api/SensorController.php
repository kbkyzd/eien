<?php

namespace eien\Http\Controllers\Api;

use eien\Http\Controllers\Controller;
use eien\SensorRaw;
use Illuminate\Http\Request;

class SensorController extends Controller
{
    public function add(Request $request)
    {
        $arr = $request->all();

        try {
            SensorRaw::create([
                'sensor_id'      => 1,
                'temp'           => $arr['temp'],
                'humi'           => $arr['humi'],
                'unix_timestamp' => $arr['timestamp'],
                'stop'           => (int)$arr['stop'],
            ]);

            return response()->json([
                'status' => 'ok',
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
            ], 422);
        }

    }
}
