<?php

namespace eien;

use Illuminate\Database\Eloquent\Model;

class TelegramToken extends Model
{
    public function user()
    {
        return $this->belongsTo('eien\User');
    }
}
