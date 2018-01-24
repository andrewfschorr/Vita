<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
})->middleware('guest');

Auth::routes();

Route::redirect('/dashboard/home', '/dashboard', 301); // this needs to gi first
Route::get('/dashboard/{page?}', 'DashboardController@editPage');
Route::get('/user/pages', 'UserController@pages');
