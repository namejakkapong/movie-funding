<?php

namespace App\Http\Controllers\Condition;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Condition;
use App\Movie;

class ConditionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $conditions = Condition::all();
        return $conditions;
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
        $condition = new Condition([
            'movie_id' => $request->movie_id,
            'name' => $request->name,
            'amount' => $request->amount,
            'detail' => $request->detail,
        ]);
        $condition->save();
        return $condition;
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
        $conditions = Condition::where('id', $id)->firstOrFail();
        return $conditions;
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
        $condition = Condition::where('id', $id)->firstOrFail(); //(2.  เอา id ที่รับเข้ามาเทียบกับ $id ของ Movie)
        $condition->name = $request->name;
        $condition->amount = $request->amount;
        $condition->detail = $request->detail;
        $condition->save();
        return $condition;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $condition = Condition::where('id', $id)->firstOrFail();
        $condition->delete();
        return $condition;
    }
}
