<?php

use App\Http\Controllers\EstadoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('estados', [EstadoController::class, 'index'])->name('estados');
Route::get('estados/{name}', [EstadoController::class, 'obtenerIndiceObesidad'])->name('obtenerIndiceObesidad');
Route::get('resumen', [EstadoController::class, 'resumenObesidad'])->name('resumenObesidad');
