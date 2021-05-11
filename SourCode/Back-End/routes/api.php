<?php

use App\Http\Controllers\ProfileController;

use App\Http\Controllers\ProviderController;
use App\Http\Controllers\RequestController;
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


Route::get('profiles',[ProfileController::class,'getAll']);
Route::get('profile/{id}',[ProfileController::class,'getById']);

Route::group(['middleware' => 'jwt.auth'], function () {
    Route::get('auth', [UserController::class,'user']);
    Route::post('logout', [UserController::class,'logout']);
    Route::prefix('providers')->group(function () {
        Route::get('/', [ProviderController::class, 'getAll']);
        Route::post('/store',[ProviderController::class,'store']);
        Route::get('/{id}',[ProviderController::class,'findById']);
        Route::get('/{id}/getinfor',[ProviderController::class,'getProviderInfor']);
    });

    Route::prefix('requests')->group(function () {
        Route::get('list',[RequestController::class, 'index']);
        Route::get('myorder',[RequestController::class, 'getMyOrder']);
        Route::post('create',[RequestController::class, 'store']);
        Route::get('',[RequestController::class, 'getMyRequest']);
        Route::post('/{id}/update',[RequestController::class, 'updateStatus']);
//        Route::delete('/{id}/delete',[RequestController::class, 'delete']);
        Route::post('/search',[RequestController::class, 'search']);
    });

});

Route::middleware('jwt.refresh')->get('/token/refresh', [UserController::class,'refresh']);


