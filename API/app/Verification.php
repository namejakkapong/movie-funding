<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Verification extends Model
{
    protected $fillable = [
        'user_id',
        'card_number',
        'passport_number',
        'tel',
        'address',
        'card_pic',
        'passport_pic'

    ];
}
