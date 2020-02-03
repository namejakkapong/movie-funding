<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Transformers\WorkExperienceTransformer;

class WorkExperience extends Model
{
    public $transformer = WorkExperienceTransformer::class;
	
    protected $fillable = [
    	'user_id',
    	'start_year',
    	'end_year',
    	'position',
    	'workplace'
    ];
}	
