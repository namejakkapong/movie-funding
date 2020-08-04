<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Condition extends Model
{
    protected $fillable = [
        'movie_id',
        'name',
        'amount',
        'detail'
    ];
}
