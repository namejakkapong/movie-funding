<?php

namespace App\Http\Controllers\Educations;

use App\Http\Controllers\ApiController;
use App\User;
use App\Education;
use Illuminate\Http\Request;

class EducationController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(User $user)
    {
        $educations = Education::where('user_id', $user->id)->get();
        return $this->showAllTransform("insert data educations complete" , $educations , 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(User $user, Request $request)
    {
        $education = new Education([
            'user_id' => $user->id,
            'graduation_year' => $request->graduation_year,
            'level' => $request->level,
            'subject' => $request->subject,
            'faculty' => $request->faculty,
            'school' => $request->school
        ]);
        $education->save();
        return $this->showOneTransform("insert data education complete" , $education , 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user, Education $education)
    {
        return $this->showOneTransform("insert data education complete" , $education , 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(User $user, $id, Request $request)
    {
        $education = Education::where(['id' => $id, 'user_id' => $user->id])->firstOrFail();
        $education->graduation_year = $request->graduation_year;
        $education->level = $request->level;
        $education->subject = $request->subject;
        $education->faculty = $request->faculty;
        $education->school = $request->school;
        $education->save();
        return $this->showOneTransform("insert data education complete" , $education , 200);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user, $id)
    {
        $education = Education::where('id', $id)->where('user_id', $user->id)->firstOrFail();
        $education->delete();
        return $this->showOneTransform("insert data education complete" , $education , 200);
    }
}
