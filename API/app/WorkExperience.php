<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class WorkExperience extends Model
{
    protected $fillable = [
    	'user_id',
    	'start_year',
    	'end_year',
    	'position',
    	'workplace'
    ];
}	
