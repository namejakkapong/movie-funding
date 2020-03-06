<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;
use App\Transformers\CategoryTransformer;

class Category extends Model
{
    use Sluggable;

    public $transformer = CategoryTransformer::class;

    /**
     * Return the sluggable configuration array for this model.
     *
     * @return array
     */
    public function sluggable()
    {
        return [
            'slug' => [
                'source' => 'eng'
            ]
        ];
    }

    protected $fillable = [
    	'name',
    	'eng',
    	'slug'
    ];
}
