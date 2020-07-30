<?php

namespace App\Http\Controllers\Image;

use App\Image;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class ImageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {
        $mimage = Image::where('id', $id)->firstOrFail();
        return $mimage;
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
        if ($request->profile_picture) {
            $image = $request->movie_image;  // your base64 encoded
            $image = str_replace('data:image/png;base64,', '', $image);
            $image = str_replace('data:image/jpg;base64,', '', $image);
            $image = str_replace('data:image/jpeg;base64,', '', $image);
            $image = str_replace('data:image/gif;base64,', '', $image);
	        $image = str_replace(' ', '+', $image);
	        $imageName = md5(rand()*time()).'.'.'png';
	        \File::put(public_path(). '/images/test/' . $imageName, base64_decode($image));

            
        }else{
            $imageName ='';
        }
        $mimage = new Image([
            'movie_image' => $imageName,
        ]);
        $mimage->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function uploadImageCover(Request $request)
    {
        $mimage = Image::find($request->mimage()->id);
        if ($request->image_cover) {
            $image = $request->image_cover;
            $image = explode(',', $image);
            $ext = base64ext($request->image_cover);
            $image = str_replace(' ', '+', $image[1]);
            $imageName = md5(rand()*time()).'.'.$ext;
            \File::put(public_path(). '/images/cover/' . $imageName, base64_decode($image));

            if ($mimage->image_cover != '') {
                @unlink(public_path().'/images/cover/'.$mimage->image_cover);
            }
            $mimage->image_cover = $imageName;
            $mimage->save();
        }
    }
}
