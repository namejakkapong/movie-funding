<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Verification extends Model
{
    protected $fillable = [
        'user_id',
        'status',
        'number',
        'tel',
        'address',
        'card_pic'
        

    ];
}
