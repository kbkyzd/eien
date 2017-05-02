@extends('layouts.main')

@section('content')
    <div class="container">
        <div class="row">
            <h3>Dashboard :: Welcome, {{ Auth::user()->name }}!</h3>

            <p>Current session: {{ Session::getId() }}</p>
            @foreach($sessions as $session)
                <p>{{ $session->user_agent }}</p>
                @if($session->id === Session::getId())
                    <span>(current)</span>
                @endif
            @endforeach

            {{ Auth::user()->remember_token ?? 'No tokens generated.' }}

            @if (Auth::user()->twofa_secret)
                <a href="{{ url('TFA/disable') }}" class="btn btn-warning">Disable 2FA</a>
            @else
                <a href="{{ url('TFA/enable') }}" class="btn btn-primary">Enable 2FA</a>
            @endif
        </div>
    </div>
@endsection
