<?php

namespace App\Http\Controllers\Movie;

use App\Movie;
use App\User;
use App\Category;
// use App\Http\Controllers\Movie\MovieController;
use App\Http\Controllers\ApiController;
use Illuminate\Http\Request;

class MovieController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $movies = Movie::all();
        return $movies;
    }
        
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
     
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $movie = new Movie([
            'category_id' => $request->category_id,
            'name' => $request->name,
            'name_eng' => $request->name_eng,
            'details' => $request->details,
            'description' => $request->description,
            'total' => $request->total, 
            'status' => $request->status,
            'start' => $request->start,
            'end' => $request->end
            
        ]);
        $movie->save();
        return $movie;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //return $id; (1. รับ id เข้ามา เพื่อเช็คว่าตรงกับ id ที่เราจะแสดง)
        $movies = Movie::where('id', $id)->firstOrFail();
        return $movies;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //return $id; (1. รับ id เข้ามา เพื่อเช็คว่าตรงกับ id ที่เราจะแก้ไขรึป่าว)
        //return $request; (3.  รับข้อมูลที่กรอกเข้ามา เพื่อเช็คว่าตรงกับ ข้อมูล ตาม database)
        $movie = Movie::where('id', $id)->firstOrFail(); //(2.  เอา id ที่รับเข้ามาเทียบกับ $id ของ Movie)
        $movie->name = $request->name;
        $movie->name_eng = $request->name_eng;
        $movie->details = $request->details;
        $movie->description = $request->description;
        $movie->total = $request->total;
        $movie->status = $request->status;
        $movie->start = $request->start;
        $movie->end = $request->end;
        $movie->save();
        return $movie;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //return $id; (   1. รับ id เข้ามา เพื่อเช็คว่าตรงกับ id ที่เราจะลบรึป่าว )
        
        $movie = Movie::where('id', $id)->firstOrFail();
        $movie->delete();
        return $movie;
    }

}
