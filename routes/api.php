<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/* Llamo el controllador */
use App\Http\Controllers\ApiDatosPController; 

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

                            /* controlador */
Route::resource('datosp', ApiDatosPController::class)->names('api.datosp');