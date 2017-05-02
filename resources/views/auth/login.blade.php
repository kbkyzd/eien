@extends('layouts.minimal')
@section('title', 'Login')

@section('content')
    <div class="col s12 card grey darken-4">
        <div class="card-content">
            <div class="row">
                <div class="col s12">
                    <h4 class="light white-text">Login</h4>
                </div>

                <form class="form-horizontal" role="form" method="POST" action="{{ route('login') }}">
                    {{ csrf_field() }}

                    <div class="input-field col s12">
                        <input class="white-text" type="text" name="username" id="username"/>
                        <label class="light white-text" for="username">Username</label>
                    </div>
                    <div class="input-field col s12">
                        <input class="white-text" type="password" name="password" id="password"/>
                        <label class="light white-text" for="password">Password</label>
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
