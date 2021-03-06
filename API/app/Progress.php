<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Progress extends Model
{
    protected $fillable = [
        'movie_id',
        'topic',
        'detail',
        'picture',
        'date'
    ];

    public function movie()
    {
    	return $this->hasOne('App\Movie', 'id', 'movie_id');
    }
}
