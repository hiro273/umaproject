@extends('layouts.app')

@section('content')
<div id="body">
    <div id="gra">
        <div id="header">
            <div>Login<span>Form</span></div>
        </div>
        <br>
        <div id="login">
            <form method="POST" action="{{ route('login') }}">
                @csrf

                <input id="email" value="login@login.com" type="email" @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>
                @error('email')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror


                <input id="password" value="Km349ZR5" type="password" @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">
            
                @error('password')
                    <span role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror

                <div>
                    <input type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>
    
                    <label class="form-check-label" for="remember">
                        {{ __('Remember Me') }}
                    </label>
                </div>
                <button type="submit" id="Button">
                    {{ __('Login') }}
                </button>
                @if (Route::has('password.request'))
                    <a class="btn btn-link" href="{{ route('password.request') }}">
                        {{ __('Forgot Your Password?') }}
                    </a>
                @endif
            </form>
        </div>
    </div>
</div>
@endsection
