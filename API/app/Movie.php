<?php


namespace App;

use Illuminate\Database\Eloquent\Model;

class Movie extends Model
{
    
    protected $fillable = [
        'category_id',
        'name',
        'name_eng',
        'details',
        'descripton',
        'status',
        'start',
        'end'
    ];
}
