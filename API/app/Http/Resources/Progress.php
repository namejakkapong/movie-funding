<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Progress extends JsonResource
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
            'id' => $this->id,
            'movie_id' => $this->movie_id,
            'topic' => $this->topic,
            'detail' => $this->detail,
            'picture' =>url('images/progress',$this->picture),
            'date' => $this->date,
        ];
    }
}
