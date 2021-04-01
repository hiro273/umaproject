@extends('layouts.app')

@section('content')
<div class="col-md-12" style="background-color:white;padding: 10px;margin-top:-24px">
    <div class="row">
        <div class="col-md-4">
            <h4 class="text-primary">{{ Auth::user()->username }}</h4>
            <img src="{{ Auth::user()->avatar }}" alt="{{ Auth::user()->username }}" height="40">
        </div>

        <div class="col-md-4">
            @if(Auth::user()->following->count())<h4>フォロー中</h4>@endif
            @foreach ($following as $user)
                <p><a href="{{ route('users', $user) }}" class="btn btn-sm btn-outline-primary">{{ $user->username }}</a></p>
            @endforeach
        </div>

        <div class="col-md-4">
            @if(Auth::user()->followers->count())<h4>フォロワー</h4>@endif
            @foreach ($followers as $user)
                <p><a href="{{ route('users', $user) }}" class="btn btn-sm btn-outline-success">{{ $user->username }}</a></p>
            @endforeach
        </div>
    </div>
</div>
<br>
<div class="col-md-12">
    <div id="root"></div>
</div>
@endsection
