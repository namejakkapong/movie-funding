<?php

namespace App\Http\Controllers\Users;

use App\User;
use App\Http\Controllers\ApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends ApiController
{
     /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::where('user_status', 'member')->get();
        return $this->showAllTransform("load data users" , $users , 200);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if ($request->profile_picture) {
            $image = $request->profile_picture;  // your base64 encoded
            $image = str_replace('data:image/png;base64,', '', $image);
            $image = str_replace('data:image/jpg;base64,', '', $image);
            $image = str_replace('data:image/jpeg;base64,', '', $image);
            $image = str_replace('data:image/gif;base64,', '', $image);
	        $image = str_replace(' ', '+', $image);
	        $imageName = md5(rand()*time()).'.'.'png';
	        \File::put(public_path(). '/images/profile/' . $imageName, base64_decode($image));

            
        }else{
            $imageName ='';
        }
        $user = new User([
            'name' => $request->name,
            'email' => $request->email,
            'user_status' => 'member',   
            'profile_picture' => $imageName,
            'admin' => User::REGULAR_USER,
            'verified' => User::VERIFIED_USER,
            'email_verified_at' => now(),
            'password' => Hash::make($request->password), // password
        ]);
        $user->save();
        return $this->showOneTransform("insert data user complete" , $user , 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = User::where('id', $id)->where('user_status', 'member')->firstOrFail();
        return $this->showOneTransform("insert data user complete" , $user , 200);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $user = User::where('id', $id)->where('user_status', 'member')->firstOrFail();
        $user->name = $request->name;
        $user->save();
        return $this->showOneTransform("insert data user complete" , $user , 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::where('id', $id)->where('user_status', 'member')->firstOrFail();
        $user->delete();
        return $this->showOneTransform("insert data user complete" , $user , 200);
    }
    public function uploadImageCover(Request $request)
    {
        $user = User::find($request->user()->id);
        if ($request->image_cover) {
            $image = $request->image_cover;
            $image = explode(',', $image);
            $ext = base64ext($request->image_cover);
            $image = str_replace(' ', '+', $image[1]);
            $imageName = md5(rand()*time()).'.'.$ext;
            \File::put(public_path(). '/images/cover/' . $imageName, base64_decode($image));

            if ($user->image_cover != '') {
                @unlink(public_path().'/images/cover/'.$user->image_cover);
            }
            $user->image_cover = $imageName;
            $user->save();
        }
        return $this->showOneTransform('update image cover successfully ', $user , 200);
    }
}
