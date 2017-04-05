<?php

namespace eien;

use Illuminate\Database\Eloquent\Model;

class Sensor extends Model
{
    /**
     * @var array
     */
    protected $fillable = [
        'sensor_name',
    ];
}
