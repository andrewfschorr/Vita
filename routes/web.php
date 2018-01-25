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

Route::get('/dashboard/home', 'DashboardController@home');
Route::get('/dashboard/page/{page?}', 'DashboardController@editPage');


// Ajax routes
Route::get('/user/pages', 'PagesController@userPages');
Route::post('/user/site-name', 'PagesController@storeSiteName');
