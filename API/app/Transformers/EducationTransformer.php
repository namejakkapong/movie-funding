<?php

namespace App\Transformers;

use App\Education;
use League\Fractal\TransformerAbstract;

class EducationTransformer extends TransformerAbstract
{
    /**
     * List of resources to automatically include
     *
     * @var array
     */
    protected $defaultIncludes = [
        //
    ];
    
    /**
     * List of resources possible to include
     *
     * @var array
     */
    protected $availableIncludes = [
        //
    ];
    
    /**
     * A Fractal transformer.
     *
     * @return array
     */
    public function transform(Education $education)
    {
        return [
            'id' => (int)$education->id,
            'user_id' => (string)$education->user_id,
            'graduation_year' => (string)$education->graduation_year,
            'level' => (string)$education->level,
            'subject' => (string)$education->subject,
            'faculty' => (string)$education->faculty,
            'school' => (string)$education->school,
            'created_at' => (string)$education->created_at,
            'updated_at' => (string)$education->updated_at,
        ];
    }
}
