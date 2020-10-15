<?php


namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Transformers\EducationTransformer;

class Movie extends Model
{

    protected $fillable = [
        'category_id',
        'name',
        'name_eng',
        'details',
        'description',
        'total',
        'status',
        'screening',
        'start',
        'end',
        'movie_image'
    ];

    //  'category_id',
    //     'name_en',
    //     'name_th',
    //     'movie_pic',
    //     'description',
    //     'resume',
    //     'director',
    //     'total',
    //     'status',
    //     'screening_date',
    //     'start_date',
    //     'end_date'

    public function category()
    {
    	return $this->hasOne('App\Category', 'id', 'category_id');
    }
}
