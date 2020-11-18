<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Transfer extends Model
{
    protected $fillable = [
        'user_id',
        'movie_id',
        'package_id',
        'bank_id',
        'transfer_amount',
        'transfer_date',
        'transfer_pic',
        'status',
        'transfer_type'


    ];

    public function user()
    {
    	return $this->hasOne('App\User', 'id', 'user_id');
    }
    public function movie()
    {
    	return $this->hasOne('App\Movie', 'id', 'movie_id');
    }
    public function package()
    {
    	return $this->hasOne('App\Package', 'id', 'package_id');
    }
    public function bank()
    {
    	return $this->hasOne('App\Bank', 'id', 'bank_id');
    }

}
