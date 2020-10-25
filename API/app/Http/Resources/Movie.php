<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Movie extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'category_id' => $this->category_id,
            'name_en' => $this->name_en,
            'name_th' => $this->name_th,
            'movie_pic' =>url('images/movie',$this->movie_image),
            'description' => $this->description,
            'resume' => $this->resume,
            'director' => $this->director,
            'total' => $this->total,
            'status' => $this->status,
            'screening_date' => $this->screening_date,
            'start_date' => $this->start_date,
            'end_date' => $this->end_date,



        ];
    }
}
