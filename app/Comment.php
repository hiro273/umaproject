<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $fillable = [
        'article_post_id',
        'name',
        'comment', 
    ];
    public function post() {
        return $this->belongTo('App\ArticlePost');
    }
}
