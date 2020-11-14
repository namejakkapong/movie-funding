<?php

namespace App\Http\Controllers\SendMoney;

use App\Http\Controllers\Controller;
use App\Movie;
use App\SendMoney;
use Illuminate\Http\Request;

class SendMoneyAddController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Movie $movie)
    {
        // $sendmoneys = SendMoney::where('movie_id', $movie->id)->get();
        // return $sendmoneys;

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
        if ($request->sendmoney_pic) {
            $image = $request->sendmoney_pic;  // your base64 encoded
            $image = str_replace('data:image/png;base64,', '', $image);
            $image = str_replace('data:image/jpg;base64,', '', $image);
            $image = str_replace('data:image/jpeg;base64,', '', $image);
            $image = str_replace('data:image/gif;base64,', '', $image);
	        $image = str_replace(' ', '+', $image);
	        $imageName = md5(rand()*time()).'.'.'png';
	        \File::put(public_path(). '/images/sendmoney/' . $imageName, base64_decode($image));


        }else{
            $imageName ='';
        }

        $sendmoney = new SendMoney([
            'movie_id' => $request->movie_id,
            'topic' => $request->topic,
            'details' => $request->details,
            'amount' => $request->amount,
            'sendmoney_date' => $request->sendmoney_date,
            'sendmoney_pic' => $imageName,

        ]);
        $sendmoney->save();
        return $sendmoney;
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $sendmoneys = SendMoney::with('movie')->where('id', $id)->firstOrFail();
        return $sendmoneys;
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
        $sendmoney = SendMoney::find($request->SendMoney()->id);
        if ($request->image_cover) {
            $image = $request->image_cover;
            $image = explode(',', $image);
            $ext = base64ext($request->image_cover);
            $image = str_replace(' ', '+', $image[1]);
            $imageName = md5(rand()*time()).'.'.$ext;
            \File::put(public_path(). '/images/sendmoney/' . $imageName, base64_decode($image));

            if ($sendmoney->image_cover != '') {
                @unlink(public_path().'/images/sendmoney/'.$sendmoney->image_cover);
            }
            $sendmoney->image_cover = $imageName;
            $sendmoney->save();
        }

    }
}
