<?php
// Route::get('/{any}', function(){
//     return view('App');
// })->where('any', '.*');

Auth::routes();

Route::group(['middleware' => ['auth']],function() {
    Route::get('/','TimeController@index');
    Route::get('/helper','TimeController@index');
    Route::get('/uma','TimeController@index');
    Route::get('/article','TimeController@index');
    Route::get('/uma/{name}','TimeController@index');
    Route::get('/posts','PostController@index');
    Route::post('/posts','PostController@create');

    Route::get('/users/{user}', 'UserController@index')->name('users');
    Route::get('/users/{user}/follow', 'UserController@follow')->name('users.follow');
    Route::get('/users/{user}/unfollow', 'UserController@unfollow')->name('users.unfollow');
});

Route::resource('bbs', 'ArticlePostsController', ['only' => ['index', 'show','create','store','edit','update','destroy']]);
Route::resource('comment', 'CommentsController', ['only' => ['store']]);
