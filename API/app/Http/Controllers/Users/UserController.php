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
    public function store(AdminRequest $request)
    {
        $user = new User([
            'name' => $request->name,
            'email' => $request->email,
            'user_status' => 'member',
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
}
