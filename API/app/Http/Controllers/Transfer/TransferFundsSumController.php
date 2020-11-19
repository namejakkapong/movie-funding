<?php

namespace App\Http\Controllers\Transfer;

use App\Http\Controllers\Controller;
use App\Transfer;
use App\Bank;
use App\Package;
use App\User;
use App\Movie;

use Illuminate\Http\Request;

class TransferFundsSumController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Movie $movie)
    {

        ///====================== ผลรวม Transfer =================================

        $transferssum = Transfer::where('movie_id', $movie->id)->
        where('status', 'confirm')->
        where('transfer_type', 'funds')->
        with('user')->
        with('package')->sum("transfer_amount");

        $movie = Movie::where('id', $movie->id)->firstOrFail(); //(2.  เอา id ที่รับเข้ามาเทียบกับ $id ของ Movie)
        $movie->funds_total = $transferssum;
        $movie->save();
        return $movie;

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
        // if ($request->transfer_pic) {
        //     $image = $request->transfer_pic;  // your base64 encoded
        //     $image = str_replace('data:image/png;base64,', '', $image);
        //     $image = str_replace('data:image/jpg;base64,', '', $image);
        //     $image = str_replace('data:image/jpeg;base64,', '', $image);
        //     $image = str_replace('data:image/gif;base64,', '', $image);
	    //     $image = str_replace(' ', '+', $image);
	    //     $imageName = md5(rand()*time()).'.'.'png';
	    //     \File::put(public_path(). '/images/transfer/' . $imageName, base64_decode($image));


        // }else{
        //     $imageName ='';
        // }

        // $transfer = new Transfer([
        //     'user_id' => $request->user_id,
        //     'movie_id' => $request->movie_id,
        //     'package_id' => $request->package_id,
        //     'bank_id' => $request->bank_id,
        //     'transfer_amount' => $request->transfer_amount,
        //     'transfer_date' => $request->transfer_date,
        //     'transfer_pic' => $imageName,
        //     'status' => $request->status,
        //     // 'transfer_note' => $request->transfer_note
        // ]);
        // $transfer->save();
        // return $transfer;
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $transfer = Transfer::
        with('user')->where('id', $id)->
        with('movie')->where('id', $id)->
        with('package')->where('id', $id)->
        with('bank')->where('id', $id)->firstOrFail();
        return $transfer;
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
    public function update(Movie $movie, $id, Request $request)
    {
        // $transferssum = Transfer::where('movie_id', $movie->id)->
        // where('status', 'confirm')->
        // where('transfer_type', 'funds')->
        // with('user')->
        // with('package')->sum("transfer_amount");
        // // return $transferssum;

        // $movie = Movie::where('id', $id)->firstOrFail();
        // $movie->current_total = $request->$transferssum;
        // $movie->save();
        // return $movie;
    }


    public function destroy($id)
    {
        $transfer = Transfer::where('id', $id)->firstOrFail();
        $transfer->delete();
        return $transfer;
    }
}
