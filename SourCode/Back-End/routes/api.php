<?php

use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});
Route::post('signup', [UserController::class,'register']);
Route::post('login', [UserController::class,'login']);

Route::group(['middleware' => 'jwt.auth'], function () {
    Route::get('auth', [UserController::class,'user']);
    Route::post('logout', [UserController::class,'logout']);
    Route::prefix('providers')->group(function () {
        Route::get('/', [\App\Http\Controllers\ProviderController::class, 'getAll']);
        Route::post('/store',[\App\Http\Controllers\ProviderController::class,'store']);
    });
});

Route::middleware('jwt.refresh')->get('/token/refresh', [UserController::class,'refresh']);


