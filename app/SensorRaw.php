<?php

namespace eien;

use Illuminate\Database\Eloquent\Model;

class SensorRaw extends Model
{
    /**
     * @var array
     */
    protected $fillable = [
        'sensor_id', 'raw_values',
    ];
}
