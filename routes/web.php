<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

// Route::get('/', 'HomeController@index');

Route::view('/{path?}', 'app');
