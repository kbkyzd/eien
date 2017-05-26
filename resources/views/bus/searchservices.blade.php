@extends('layouts.main')
@section('title', 'Dashboard')

@section('content')
    <div class="container">
        <div class="row">
            <h4>Search results for: <span class="light">{{ request()->service }}</span></h4>
            <table>
                <thead>
                <tr>
                    <th>Service No</th>
                    <th>Name</th>
                    <th>Operator</th>
                </tr>
                </thead>
                <tbody>

                @foreach(array_slice($services, 0, 20) as $service)
                    <tr>
                        <td>{{ $service[0]['no'] }}</td>
                        <td>{{ $service[0]['name'] }}</td>
                        <td>{{ $service[0]['operator'] }}</td>
                    </tr>
                @endforeach
                </tbody>
            </table>
            <a class="btn waves-light waves-effect" href="{{ route('bus.dashboard') }}">Return</a>
        </div>
    </div>
@endsection
