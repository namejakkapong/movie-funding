<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Education extends Model
{
    protected $fillable = [
    	'user_id',
    	'graduation_year',
    	'level',
    	'subject',
    	'faculty',
    	'school'
    ];
}
