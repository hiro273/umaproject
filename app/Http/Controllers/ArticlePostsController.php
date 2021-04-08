<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ArticlePost, App\Category;
use App\Http\Requests\ArticlePostRequest;

class ArticlePostsController extends Controller
{
    public function index(Request $request) {
    // カテゴリ取得
        $category = new Category;
        $categories = $category->getLists();
    
        $category_id = $request->category_id;
        if (!is_null($category_id)) {
            $posts = ArticlePost::where('category_id', $category_id)->orderBy('created_at', 'desc')->paginate(10);
        } else {
            $posts = ArticlePost::orderBy('created_at', 'desc')->paginate(10);
        }
    
        return view('bbs.index', [
            'posts' => $posts,
            'categories' => $categories,
            'category_id' => $category_id,
        ]);
    }

    public function show(Request $request, $id) {
        $post = ArticlePost::findOrFail($id);

        return view('bbs.show' , [
            'post' => $post,
        ]);
    }

    public function create() {
        $category = new Category;
        $categories = $category->getLists()->prepend('選択', '');
        return view('bbs.create', ['categories' => $categories]);
    }

    public function store(ArticlePostRequest $request) {
        $savedata = [
            'name' => $request->name,
            'subject' => $request->subject,
            'message' => $request->message,
            'category_id' => $request->category_id,
        ];

        $post = new ArticlePost;
        $post->fill($savedata)->save();
    
        return redirect('/bbs')->with('poststatus', '新規投稿しました');
    }

    public function edit($post_id) {
        $category = new Category;
        $categories = $category->getLists();

        $post = ArticlePost::findOrFail($post_id);
        return view('bbs.edit', ['post' => $post, 'categories' => $categories]);
    }

    public function update(ArticlePostRequest $request) {
        $savedata = [
            'name' => $request->name,
            'subject' => $request->subject,
            'message' => $request->message,
            'category_id' => $request->category_id,
        ];

        $post = new ArticlePost;
        $post->fill($savedata)->save();

        return redirect('/bbs')->with('poststatus','投稿を編集しました');
    }

    public function destroy($id) {
        $post = ArticlePost::findOrFail($id);

        $post->comments()->delete();
        $post->delete();

        return redirect('/bbs')->with('poststatus' ,'投稿を消去しました');
    }
}
