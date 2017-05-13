@extends('layouts.minimal')
@section('title', 'Login')

@section('content')
    <div class="col s12 card grey darken-4">
        <div class="card-content">
            <div class="row">
                <div class="col s12">
                    <h4 class="white-text light">Login</h4>
                    @if($errors->has('username'))
                        <p class="red-text">{{ $errors->first('username') }}</p>
                    @endif

                    @if($errors->has('password'))
                        <p class="red-text">{{ $errors->first('password') }}</p>
                    @endif
                </div>

                <form role="form" method="POST" action="{{ route('login') }}">
                    {{ csrf_field() }}

                    <div class="input-field col s12">
                        <input class="white-text {{ $errors->has('username') ? 'invalid' : '' }}" type="text" name="username" id="username" required/>
                        <label class="grey-text text-lighten-1" for="username">Username</label>
                    </div>
                    <div class="input-field col s12">
                        <input class="white-text {{ $errors->has('password') ? 'invalid' : '' }}" type="password" name="password" id="password" required/>
                        <label class="grey-text text-lighten-1" for="password">Password</label>
                    </div>

                    <div class="col s12">
                        <button type="submit" class="btn right">Login</button>

                        <input type="checkbox" id="remember" name="remember" {{ old('remember') ? 'checked' : '' }}>
                        <label class="grey-text text-lighten-1" for="remember">Remember me</label>
                        <br>
                        <a href="{{ route('password.request') }}">Forgot Your Password?</a>
                    </div>

                </form>
            </div>
        </div>
    </div>
    <div id="login-fss-container"></div>
@endsection
