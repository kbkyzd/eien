@extends('layouts.minimal')
@section('title', 'Password Reset')

@section('content')
    <div class="col s12 card grey darken-4">
        <div class="card-content">
            <div class="row">
                <div class="col s12">
                    <h4 class="white-text light">Reset Password</h4>
                    @if (session('status'))
                        <p class="green-text">{{ session('status') }}</p>
                    @endif

                    {{-- Errors --}}
                    @if ($errors->has('email'))
                        <p class="green-text">{{ $errors->first('email') }}</p>
                    @endif
                </div>
                <form role="form" method="POST" action="{{ route('password.email') }}">
                    {{ csrf_field() }}

                    <div class="input-field col s12">
                        <label for="email" class="grey-text text-lighten-1">E-Mail Address</label>
                        <input id="email" type="email" class="white-text" name="email" value="{{ old('email') }}" required>
                        <button type="submit" class="btn waves-effect waves-light">Send Password Reset Link</button>
                    </div>

                </form>
            </div>
        </div>
    </div>
    <div id="login-fss-container"></div>
@endsection
