@extends('layouts.main')
@section('title', 'Dashboard')

@section('content')
    <div class="container">
        <div class="row">
            <table class="centered">
                <thead>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Lat/Long</th>
                </tr>
                </thead>
                <tbody>
                @foreach(array_slice($services, 0, 20) as $service)
                    <tr>
                        <td><a href="{{ route('bus.info.stops', ['stopId' => $service[0]['no']]) }}">{{ $service[0]['no'] }}</a></td>
                        <td>{{ $service[0]['name'] }}</td>
                        <td>{{ $service[0]['lat'] }}/{{ $service[0]['lng'] }}</td>
                    </tr>
                @endforeach
                </tbody>
            </table>
            <a class="btn waves-light waves-effect" href="{{ route('bus.dashboard') }}">Return</a>
        </div>
    </div>
@endsection
