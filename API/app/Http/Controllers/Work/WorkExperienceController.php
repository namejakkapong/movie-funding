<?php

namespace App\Http\Controllers\Work;

use App\Http\Controllers\ApiController;
use App\User;
use App\WorkExperience;
use Illuminate\Http\Request;

class WorkExperienceController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(User $user)
    {
        $works = WorkExperience::where('user_id', $user->id)->get();
        return $this->showAllTransform("insert data works complete" , $works , 200);
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
        $work = new WorkExperience([
            'user_id' => $user->id,
            'start_year' => $request->start_year,
            'end_year' => $request->end_year,
            'position' => $request->position,
            'workplace' => $request->workplace
        ]);
        $work->save();
        return $this->showOneTransform("insert data work complete" , $work , 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user, $id)
    {
        $work = WorkExperience::where('user_id', $user->id)->where('id', $id)->firstOrFail();
        return $this->showOneTransform("load data work complete" , $work , 200);
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
        $work = WorkExperience::where(['id' => $id, 'user_id' => $user->id])->firstOrFail();
        $work->start_year = $request->start_year;
        $work->end_year = $request->end_year;
        $work->position = $request->position;
        $work->workplace = $request->workplace;
        $work->save();
        return $this->showOneTransform("update data work complete" , $work , 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user, $id)
    {
        $work = WorkExperience::where('id', $id)->where('user_id', $user->id)->firstOrFail();
        $work->delete();
        return $this->showOneTransform("delete data work complete" , $work , 200);
    }
}
