<?php

namespace App\Http\Controllers\UserVerification;

use App\User;
use App\Verification;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UserVerificationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $verifications = Verification::where('status', 'disapproval')->with('user')->get();
        return $verifications;
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
        if ($request->card_pic) {
            $image = $request->card_pic;  // your base64 encoded
            $image = str_replace('data:image/png;base64,', '', $image);
            $image = str_replace('data:image/jpg;base64,', '', $image);
            $image = str_replace('data:image/jpeg;base64,', '', $image);
            $image = str_replace('data:image/gif;base64,', '', $image);
	        $image = str_replace(' ', '+', $image);
	        $imageName = md5(rand()*time()).'.'.'png';
            \File::put(public_path(). '/images/verification/card_pic' . $imageName, base64_decode($image));

        }else{
            $imageName ='';
        }

        $verification = new Verification([
            'user_id' => $request->user_id,
            'status' => $request->status,
            'card_number' => $request->card_number,
            'tel' => $request->tel,
            'address' => $request->address,
            'card_pic' => $request->card_pic,

        ]);
        $verification->save();
        return $verification;
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
        $verification = Verification::where('id', $id)->firstOrFail();
        $verification->status = $request->status;
        $verification->card_number = $request->card_number;
        $verification->tel = $request->tel;
        $verification->address = $request->address;
        // $verification->card_pic = $request->card_pic;
        $verification->save();
        return $verification;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $verification = Verification::where('id', $id)->firstOrFail();
        $verification->delete();
        return $verification;
    }
}
