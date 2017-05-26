@extends('layouts.main')
@section('title', Auth::user()->name . '\'s Profile')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col s12">
                <h3 class="light">Welcome back, {{ Auth::user()->name }}!</h3>
                <p>Last Seen: {{ $diff }} </p>
            </div>
        </div>
        <div class="row">
            <div class="col s12 m6 l4">
                <div class="card">
                    <div class="card-content">
                        <span class="card-title">Test xD</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum doloremque exercitationem expedita explicabo itaque natus nesciunt odio omnis quidem quis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda officia sapiente similique!</p>
                    </div>
                </div>
            </div>
            <div class="col s12 m6 l4">
                <div class="card">
                    <div class="card-content">
                        <span class="card-title">Test xD</span>
                    </div>
                </div>
            </div>
            <div class="col s12 m6 l4">
                <div class="card">
                    <div class="card-content">
                        <span class="card-title">Test xD</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
