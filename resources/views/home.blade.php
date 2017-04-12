@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Dashboard :: Welcome back, {{ auth()->user()->name }}!</div>

                    <div class="panel-body">
                        <p>Current session: {{ session()->getId() }}</p>
                        @foreach($sessions as $session)
                            <p>{{ $session->user_agent }}</p>
                            @if($session->id === session()->getId())
                                <span>(current)</span>
                            @endif
                        @endforeach
                    </div>

                    <div class="panel-body">
                        @if (auth()->user()->twofa_secret)
                            <a href="{{ url('TFA/disable') }}" class="btn btn-warning">Disable 2FA</a>
                        @else
                            <a href="{{ url('TFA/enable') }}" class="btn btn-primary">Enable 2FA</a>
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
