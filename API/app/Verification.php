<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Verification extends Model
{
    protected $fillable = [
        'user_id',
        'type',
        'card_number',
        'status',
        'address',
        'card_pic',



    ];

    public function user()
    {
    	return $this->hasOne('App\User', 'id', 'user_id');
    }
}
