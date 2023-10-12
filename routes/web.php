<?php

use Illuminate\Support\Facades\Route;
use Spatie\Permission\Models\Role;
use App\Http\Controllers\admin\ProductController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


Auth::routes();

Route::group(['middleware' => ['role:admin']], function () {
    Route::get('/admin/dashboard', [App\Http\Controllers\AdminController::class, 'index'])->name('admin_dashboard');
    Route::apiResource('products',ProductController::class);
});

Route::group(['middleware' => ['role:user']], function () {
    Route::get('/user/dashboard', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

});


//Route::get('addrole',function (){
//    Role::create([
//        "name" => "admin"
//    ]) ;
//});


Route::get('/abouts',function (){
    return view('pages.about');
});
Route::get('/contacts',function (){
    return view('pages.contact');
});



