<?php

namespace App\Http\Controllers\Package;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Package;

class PackageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $packages = Package::with('movie')->orderBy('created_at', 'DESC')->get();
        return $packages;
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
        $package = new Package([
            'movie_id' => $request->movie_id,
            'type_package' => $request->type_package,
            'topic' => $request->topic,
            'details' => $request->details,
            'reward' => $request->reward,
            'amount' => $request->amount,
            'percent' => $request->percent,
        ]);
        $package->save();
        return $package;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $packages = Package::where('id', $id)->firstOrFail();
        return $packages;
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
        $packages = Package::where('id', $id)->firstOrFail(); //(2.  เอา id ที่รับเข้ามาเทียบกับ $id ของ Movie)
        $packages->type_package = $request->type_package;
        $packages->topic = $request->topic;
        $packages->details = $request->details;
        $packages->reward = $request->reward;
        $packages->amount = $request->amount;
        $packages->percent = $request->percent;
        $packages->save();
        return $packages;

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
}
