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
    return env('SPLASH_PAGE', false) ? view('splash') : view('welcome');
})->middleware('guest');

if (env('SPLASH_PAGE', false)) {
    Route::post('/subscribe-splash', 'SplashController@subscribe');
    Route::any('/{any}', function() {
        return redirect('/');
    })->where('any', '.*');
}

Auth::routes();
Route::get('/dashboard/home', 'DashboardController@home');
Route::get('/dashboard/page/{page?}', 'DashboardController@editPage');
// Ajax routes
Route::get('/user/pages', 'PagesController@userPages');
Route::post('/user/site-name', 'PagesController@storeSiteName');
Route::post('/page', 'PagesController@addPage');
Route::put('/page', 'PagesController@updatePage');
