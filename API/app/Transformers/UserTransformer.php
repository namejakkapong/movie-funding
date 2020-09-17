<?php

namespace App\Transformers;

use App\User;
use League\Fractal\TransformerAbstract;

class UserTransformer extends TransformerAbstract
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
    public function transform(User $user)
    {
        if ($user->profile_picture != '') {
            $profile_picture = url('images/user' , $user->profile_picture);
        } else {
            $profile_picture = url('images/default/no-image-user.png');
        }
        return [
            'id' => (int)$user->id,
            'name' => (string)$user->name,
            'email' => (string)$user->email,
            'profile_picture' => (string)$profile_picture,
            'user_status' => (string)$user->user_status,
            'admin' => (string)$user->admin,
            'tel' => (string)$user->tel,
            'address' => (string)$user->address,
            'district' => (string)$user->district,
            'amphoe' => (string)$user->amphoe,
            'province' => (string)$user->province,
            'zipcode' => (string)$user->zipcode,
            'country' => (string)$user->country,
            'career' => (string)$user->career,
            'workplace'=> (string)$user->workplace,
            'created_at' => (string)$user->created_at,
            'updated_at' => (string)$user->updated_at,

        ];
    }
}
