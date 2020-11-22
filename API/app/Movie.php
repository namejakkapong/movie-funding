<?php


namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Transformers\EducationTransformer;

class Movie extends Model
{

    protected $fillable = [
        'category_id',
        'name_en',
        'name_th',
        'movie_pic',
        'description',
        'resume',
        'director',
        'total',
        'current_total',
        'funds_total',
        'invest_total',
        'share',
        'status',
        'screening_date',
        'start_date',
        'end_date'
    ];



    public function category()
    {
    	return $this->hasOne('App\Category', 'id', 'category_id');
    }
}
