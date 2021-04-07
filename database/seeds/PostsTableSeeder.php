<?php

use Illuminate\Database\Seeder;

class PostsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\ArticlePost::class, 50)
            ->create()
            ->each(function ($articlepost) {
                $comments = factory(App\Comment::class, 2)->make();
                $articlepost->comments()->saveMany($comments);
            });
    }
}
