<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Package extends Model
{
    protected $fillable = [
        'movie_id',
        'type_package',
        'topic',
        'details',
        'reward',
        'amount',
        'percent'

    ];

    public function movie()
    {
    	return $this->hasOne('App\Movie', 'id', 'movie_id');
    }
}
