<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Verification extends Model
{
    protected $fillable = [
        'user_id',
        'status',
        'card_number',
        'tel',
        'address',
        'card_pic'
        

    ];
}
