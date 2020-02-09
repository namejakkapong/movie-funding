<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\WorkExperience;

class WorkExperienceTransformer extends TransformerAbstract
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
    public function transform(WorkExperience $work)
    {
        return [
            'id' => (int)$work->id,
            'user_id' => (string)$work->user_id,
            'start_year' => (string)$work->start_year,
            'end_year' => (string)$work->end_year,
            'position' => (string)$work->position,
            'workplace' => (string)$work->workplace,
            'created_at' => (string)$work->created_at,
            'updated_at' => (string)$work->updated_at,
        ];
    }
}
