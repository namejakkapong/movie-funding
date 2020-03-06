<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('login', 'APIAuth\LoginController@login');
Route::get('logout', 'APIAuth\LoginController@logout')->middleware('auth:api');
Route::resource('admins', 'Users\AdminController');
Route::resource('users', 'Users\UserController');
Route::resource('users.educations', 'Educations\EducationController');
Route::resource('users.experience', 'Work\WorkExperienceController');
Route::resource('categories', 'Category\CategoryController');
