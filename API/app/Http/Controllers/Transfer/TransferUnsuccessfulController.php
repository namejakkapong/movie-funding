<?php

namespace App\Http\Controllers\Transfer;

use App\Http\Controllers\Controller;
use App\Transfer;
use App\Bank;
use App\Package;
use App\User;
use App\Movie;

use Illuminate\Http\Request;

class TransferUnsuccessfulController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(User $user , Movie $movie)
    {
        // $transfers = Transfer::
        // with('user')->
        // with('package')->
        // with('bank')->get();
        // return $transfers;

        // $packages = Package::where('movie_id', $movie->id)->where('type_package', 'invest')->get();
        // // $packages = Package::with('movie')->orderBy('created_at', 'DESC')->get();
        // return $packages;

        $transfers = Transfer::where('user_id', $user->id)->where('movie_id', $movie->id)->
        where('status', 'unsuccessful')->
        with('user')->
        with('movie')->
        with('package')->
        with('bank')->get();
        // $packages = Package::with('movie')->orderBy('created_at', 'DESC')->get();
        return $transfers;

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
        $transfer = Transfer::where('id', $id)->firstOrFail();
        $transfer->delete();
        return $transfer;
    }
}
