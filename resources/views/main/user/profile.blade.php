@extends('layouts.main')
@section('title', Auth::user()->name . '\'s Profile')

@section('content')
    <div class="container">
        <div class="row">
            <h3>{{ Auth::user()->name }}</h3>
            <p>Last Seen: {{ $diff }} </p>

        </div>
    </div>
@endsection
