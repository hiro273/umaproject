<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ArticlePost extends Model
{
    protected $fillable = [
        'name',
        'subject',
        'message', 
        'category_id'
    ];

    public function comments()
    {
        return $this->hasMany('App\Comment');
    }
 
    public function category()
    {
        return $this->belongsTo('App\Category');
    }

    public function scopeCategoryAt($query, $category_id)
    {
        if (empty($category_id)) {
            return;
        }
    
        return $query->where('category_id', $category_id);
    }

    public function scopeFuzzyName($query, $searchword) {
        if (empty($searchword)) {
            return;
        }
        return $query->where('name','like','%{$searchword}%');
    }

    public function scopeFuzzyNameMessage($query, $searchword) {
        if (empty($searchword)) {
            return;
        }

        return $query->where(function($query) use($searchword) {
            $query->orWhere('name', 'like', '%{$searchword}%')
                  ->orWhere('message', 'like', '%{$searchword}%');
        });
    }
}
