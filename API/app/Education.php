<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Transformers\EducationTransformer;

class Education extends Model
{
    public $transformer = EducationTransformer::class;

    protected $fillable = [
    	'user_id',
    	'graduation_year',
    	'level',
    	'subject',
    	'faculty',
    	'school'
    ];
}
