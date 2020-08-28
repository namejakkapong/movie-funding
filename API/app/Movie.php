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
        'start',
        'end',
        'movie_image'
    ];

    public function category()
    {
    	return $this->hasOne('App\Category', 'id', 'category_id');
    }
}
