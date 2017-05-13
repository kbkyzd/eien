@extends('layouts.minimal')

@section('content')
    <div class="container">
        <div class="col s12 card grey darken-4">
            <div class="card-content">
                <div class="row">
                    <div class="col s12">
                        <h4 class="white-text light">Reset Password</h4>

                        @if (session('status'))
                            <p>{{ session('status') }}</p>
                        @endif

                        <div class="red-text">
                            @if ($errors->has('email'))
                                <p>{{ $errors->first('email') }}</p>
                            @endif

                            @if ($errors->has('password_confirmation'))
                                <p>{{ $errors->first('password_confirmation') }}</p>
                            @endif

                            @if ($errors->has('password'))
                                <p>{{ $errors->first('password') }}</p>
                            @endif
                        </div>
                    </div>
                    <form class="form-horizontal" role="form" method="POST" action="{{ route('password.request') }}">
                        {{ csrf_field() }}
                        <input type="hidden" name="token" value="{{ $token }}">

                        <div class="input-field col s12">
                            <label for="email" class="grey-text text-lighten-2">E-Mail Address</label>
                            <input id="email" type="email" name="email" class="white-text" value="{{ $email or old('email') }}" required autofocus>
                        </div>

                        <div class="input-field col s12">
                            <label for="password" class="grey-text text-lighten-2">Password</label>
                            <input id="password" type="password" class="white-text {{ $errors->has('password') ? 'invalid' : '' }}" name="password" required>
                        </div>

                        <div class="input-field col s12">
                            <label for="password-confirm" class="grey-text text-lighten-2">Confirm Password</label>
                            <input id="password-confirm" type="password" class="white-text {{ $errors->has('password') ? 'invalid' : '' }}" name="password_confirmation" required>
                            <button type="submit" class="btn btn-primary">Reset Password</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div id="login-fss-container"></div>
@endsection
