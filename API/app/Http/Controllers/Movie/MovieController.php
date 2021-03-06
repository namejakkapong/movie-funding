<?php

namespace App\Http\Controllers\Movie;

use App\Movie;
use App\User;
use App\Category;
use App\Http\Resources\Movie as MovieResource;
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
        $movies = Movie::with('category')->orderBy('created_at', 'DESC')->get();
        return MovieResource::collection($movies);
        //return $movies;
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
        if ($request->movie_pic) {
            $image = $request->movie_pic;  // your base64 encoded
            $image = str_replace('data:image/png;base64,', '', $image);
            $image = str_replace('data:image/jpg;base64,', '', $image);
            $image = str_replace('data:image/jpeg;base64,', '', $image);
            $image = str_replace('data:image/gif;base64,', '', $image);
	        $image = str_replace(' ', '+', $image);
	        $imageName = md5(rand()*time()).'.'.'png';
	        \File::put(public_path(). '/images/movie/' . $imageName, base64_decode($image));


        }else{
            $imageName ='';
        }

        $movie = new Movie([
            'category_id' => $request->category_id,
            'name_en' => $request->name_en,
            'name_th' => $request->name_th,
            'movie_pic' => $imageName,
            'description' => $request->description,
            'resume' => $request->resume,
            'director' => $request->director,
            'total' => $request->total,
            'current_total' => $request->current_total,
            'status' => $request->status,
            'screening_date' => $request->screening_date,
            'start_date' => $request->start_date,
            'end_date' => $request->end_date


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

        $movie = Movie::with('category')->where('id', $id)->firstOrFail();
        return $movie;
        // return MovieResource::collection($movie);
        // // return $this->showOneTransform("insert data user complete" , $movie , 200);


        // $movie = Movie::where('id', $id)->firstOrFail();
        // return $this->showOneTransform("insert data user complete" , $movie , 200);
        // return $movie;

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
        // $movie->category_id = $request->category_id;
        $movie->name_en = $request->name_en;
        $movie->name_th = $request->name_th;
        // $movie->movie_pic = $request->movie_pic;
        $movie->description = $request->description;
        $movie->resume = $request->resume;
        $movie->director = $request->director;
        // $movie->total = $request->total;
        $movie->current_total = $request->current_total;
        // $movie->status = $request->status;
        // $movie->screening_date = $request->screening_date;
        // $movie->start_date = $request->start_date;
        $movie->end_date = $request->end_date;
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

    public function uploadImageCover(Request $request)
    {
        $movie = Movie::find($request->movie()->id);
        if ($request->image_cover) {
            $image = $request->image_cover;
            $image = explode(',', $image);
            $ext = base64ext($request->image_cover);
            $image = str_replace(' ', '+', $image[1]);
            $imageName = md5(rand()*time()).'.'.$ext;
            \File::put(public_path(). '/images/movie/' . $imageName, base64_decode($image));

            if ($movie->image_cover != '') {
                @unlink(public_path().'/images/movie/'.$movie->image_cover);
            }
            $movie->image_cover = $imageName;
            $movie->save();
        }

    }

}
