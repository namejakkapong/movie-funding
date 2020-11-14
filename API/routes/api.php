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
Route::resource('movies', 'Movie\MovieController');
Route::resource('images', 'Image\ImageController');
// Route::resource('verifications', 'UserVerification\UserVerificationController');
Route::resource('conditions', 'Condition\ConditionController');
Route::resource('movies.progresses', 'Progress\ProgressController');
Route::resource('movienew', 'Movie\MovieNewController');
Route::resource('movies.packages', 'Package\PackageController');
Route::resource('movies.packages2', 'Package\Package2Controller');
Route::resource('packagesall', 'Package\PackageAllController');
Route::resource('banks', 'Bank\BankController');
Route::resource('movies.transfersadnot', 'Transfer\TransferAdNotController');
Route::resource('movies.transfersadconfirm', 'Transfer\TransferAdConfirmController');
Route::resource('movies.transfersadunsuccessful', 'Transfer\TransferAdUnsuccessfulController');
Route::resource('users.movies.transfersnot','Transfer\TransferNotController');
Route::resource('users.movies.transfersconfirm','Transfer\TransferConfirmController');
Route::resource('users.movies.transfersunsuccessful','Transfer\TransferUnsuccessfulController');
Route::resource('movies.sendmoneys', 'SendMoney\SendMoneyController');
Route::resource('sendmoneys', 'SendMoney\SendMoneyAddController');

