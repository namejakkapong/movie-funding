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
}
