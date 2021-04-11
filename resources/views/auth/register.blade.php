@extends('layouts.app')

@section('content')
<div id="bodys">
    <div id="gra">
        <div id="header">
            <div id="registerRight">Register<span>Form</span></div>
        </div>
        <br>
        <div id="login">
            <form method="POST" action="{{ route('register') }}">
                @csrf
                <input id="username" type="text" placeholder="username" @error('username') is-invalid @enderror" name="username" value="{{ old('username') }}" required autocomplete="username" autofocus>
                @error('username')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror

                <input id="email" type="email" placeholder="email" @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>
                @error('email')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror


                <input id="password" type="password" placeholder="password" @error('password') is-invalid @enderror" name="password" required autocomplete="new-password">
            
                @error('password')
                    <span role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror

                <input id="password" type="password" placeholder="password-confirm" name="password_confirmation" required autocomplete="new-password">

                <button type="submit" id="Button">
                    {{ __('Register') }}
                </button>
            </form>
        </div>
    </div>
</div>
@endsection
