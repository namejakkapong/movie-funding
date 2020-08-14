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
            'name' => $this->name,
            'name_eng' => $this->name_eng,
            'details' => $this->details,
            'description' => $this->description,
            'total' => $this->total,
            'status' => $this->status,
            'start' => $this->start,
            'end' => $this->end,
            'movie_image' =>url('images/movie',$this->movie_image),
            
        ];
    }
}
