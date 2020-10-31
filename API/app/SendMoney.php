<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SendMoney extends Model
{
    protected $fillable = [
        'movie_id',
        'topic',
        'details',
        'amount',
        'sendmoney_date',
        'sendmoney_pic'
    ];

    public function movie()
    {
    	return $this->hasOne('App\Movie', 'id', 'movie_id');
    }
}
