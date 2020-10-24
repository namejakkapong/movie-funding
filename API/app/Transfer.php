<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Transfer extends Model
{
    protected $fillable = [
        'user_id',
        'package_id',
        'bank_id',
        'transfer_amount',
        'transfer_date',
        'transfer_pic',
        'status'


    ];

    public function user()
    {
    	return $this->hasOne('App\User', 'id', 'user_id');
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
