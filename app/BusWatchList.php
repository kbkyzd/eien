<?php

namespace eien;

use Illuminate\Database\Eloquent\Model;

class BusWatchList extends Model
{
    public function user()
    {
        return $this->belongsTo('eien\User');
    }
}
