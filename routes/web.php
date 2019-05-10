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
    $title = "Anna Jéssica Oficial";
    return view('index', compact('title'));
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');


Route::group(['prefix' => 'adminConf', 'middleware' => 'auth'], function() {
    Route::get('/', 'HomeController@adminConf')->name('adminConf');
    Route::post('/agenda', 'AdminController@pageAgenda')->name('getAgenda');
});
Route::get('/perfil', 'HomeController@perfil')->name('perfil');

// Route para registrar pessoa
Route::group(['prefix' => 'user', 'middleware' => 'auth'], function() {
    Route::any('/userRelatorio', 'HomeController@pageRelatorioUser')->name('userRelatorio');
    Route::post('/editUser', 'HomeController@editUser')->name('editUser');
});

