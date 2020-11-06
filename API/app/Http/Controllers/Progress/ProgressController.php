<?php

namespace App\Http\Controllers\Progress;

use App\Movie;
use App\Progress;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ProgressController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Movie $movie)
    {
        $progresses = Progress::where('movie_id', $movie->id)->get();
        return $progresses;
        //$movies = Movie::with('category')->orderBy('created_at', 'DESC')->get();

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
    public function store(Request $request)
    {
        if ($request->picture) {
            $image = $request->picture;  // your base64 encoded
            $image = str_replace('data:image/png;base64,', '', $image);
            $image = str_replace('data:image/jpg;base64,', '', $image);
            $image = str_replace('data:image/jpeg;base64,', '', $image);
            $image = str_replace('data:image/gif;base64,', '', $image);
	        $image = str_replace(' ', '+', $image);
	        $imageName = md5(rand()*time()).'.'.'png';
	        \File::put(public_path(). '/images/progress/' . $imageName, base64_decode($image));


        }else{
            $imageName ='';
        }

        $progress = new Progress([
            'movie_id' => $request->movie_id,
            'topic' => $request->topic,
            'detail' => $request->detail,
            'picture' => $imageName,
            'date' => $request->date,
        ]);
        $progress->save();
        return $progress;
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
        $progresses = Progress::with('movie')->where('id', $id)->firstOrFail();
        return $progresses;

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
        $progress = Progress::where('id', $id)->firstOrFail(); //(2.  เอา id ที่รับเข้ามาเทียบกับ $id ของ Movie)
        $progress->topic = $request->topic;
        $progress->detail = $request->detail;
        $progress->date = $request->date;
        $progress->save();
        return $progress;

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

        $progress = Progress::where('id', $id)->firstOrFail();
        $progress->delete();
        return $progress;
    }

    public function uploadImageCover(Request $request)
    {
        $progress = Progress::find($request->Progress()->id);
        if ($request->image_cover) {
            $image = $request->image_cover;
            $image = explode(',', $image);
            $ext = base64ext($request->image_cover);
            $image = str_replace(' ', '+', $image[1]);
            $imageName = md5(rand()*time()).'.'.$ext;
            \File::put(public_path(). '/images/progress/' . $imageName, base64_decode($image));

            if ($progress->image_cover != '') {
                @unlink(public_path().'/images/progress/'.$progress->image_cover);
            }
            $progress->image_cover = $imageName;
            $progress->save();
        }

    }
}
