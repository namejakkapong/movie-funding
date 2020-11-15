<?php

namespace App\Http\Controllers\Users;

use App\Http\Controllers\ApiController;
use App\Http\Requests\Users\AdminRequest;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;


class AdminShowController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::where('user_status', 'admin')->get();
        // return $this->showAllTransform("update categories order success" , $users , 200);
        return $users;
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
            'user_status' => 'admin',
            'admin' => User::ADMIN_USER,
            'verified' => User::VERIFIED_USER,
            'email_verified_at' => now(),
            'password' => Hash::make($request->password), // password
        ]);
        $user->save();
        return $this->showOneTransform("insert data admin complete" , $user , 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = User::where('id', $id)->where('user_status', 'admin')->where('admin', 'true')->firstOrFail();
        return $this->showOneTransform("insert data admin complete" , $user , 200);
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
        $user = User::where('id', $id)->where('user_status', 'admin')->where('admin', 'true')->firstOrFail();
        $user->name = $request->name;
        $user->save();
        return $this->showOneTransform("insert data admin complete" , $user , 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::where('id', $id)->where('user_status', 'admin')->where('admin', 'true')->firstOrFail();
        $user->delete();
        return $this->showOneTransform("insert data admin complete" , $user , 200);
    }
}
