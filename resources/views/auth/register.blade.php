@extends('layouts.minimal')
@section('title', 'Register')

@section('content')
    <div class="register card grey darken-4">
        <div class="card-content">
            <div class="row">
                <div class="col s12">
                    <h4 class="white-text light">Register</h4>
                    @if ($errors->has('name'))
                        <p class="red-text">{{ $errors->first('name') }}</p>
                    @endif

                    @if ($errors->has('email'))
                        <p class="red-text">{{ $errors->first('email') }}</p>
                    @endif

                    @if ($errors->has('username'))
                        <p class="red-text">{{ $errors->first('username') }}</p>
                    @endif

                    @if ($errors->has('password'))
                        <p class="red-text">{{ $errors->first('password') }}</p>
                    @endif
                </div>
            </div>
            <div class="row">
                    <form role="form" method="POST" action="{{ route('register') }}">
                        {{ csrf_field() }}

                        <div class="input-field col s12">
                            <input id="name" type="text" class="white-text {{ $errors->has('name') ? 'invalid' : '' }}" name="name" value="{{ old('name') }}" required>
                            <label for="name">Name</label>
                        </div>

                        <div class="input-field col s12">
                            <input id="email" type="email" class="white-text {{ $errors->has('email') ? 'invalid' : '' }}" name="email" value="{{ old('email') }}" required>
                            <label for="email">E-Mail Address</label>
                        </div>

                        <div class="input-field col s12">
                            <input id="username" type="text" class="white-text {{ $errors->has('username') ? 'invalid' : '' }}" name="username" value="{{ old('username') }}" required>
                            <label for="username">Username</label>
                        </div>

                        <div class="input-field col s12">
                            <input id="password" type="password" class="white-text {{ $errors->has('password') ? 'invalid' : '' }}" name="password" required>
                            <label for="password">Password</label>
                        </div>

                        <div class="input-field col s12">
                            <input id="password-confirm" type="password" class="white-text {{ $errors->has('password') ? 'invalid' : '' }}" name="password_confirmation" required>
                            <label for="password-confirm">Confirm Password</label>
                        </div>
                        <div class="col s12">
                            <button type="submit" class="btn">Register</button>
                            &nbsp;
                            {!! app('captcha')->display(['data-theme' => 'dark']) !!}
                        </div>

                    </form>
            </div>
        </div>
    </div>
    <div id="login-fss-container"></div>
@endsection
