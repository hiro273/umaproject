@extends('layouts.app')

@section('content')
<div class="container">
    {{ $user->username }}
    <hr>
    @if(Auth::user()->isNotTheUser($user))
      @if(Auth::user()->isFollowing($user))
        <a href={{ route('users.unfollow', $user) }}>フォロー解除</a>
      @else
        <a href={{ route('users.follow',$user) }}>フォローする</a>
      @endif
    @endif
</div>
@endsection