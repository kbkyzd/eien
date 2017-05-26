@extends('layouts.main')
@section('title', 'Settings > Session')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col s12">
                <ul class="tabs tabs-fixed-width">
                    <li class="tab col s3"><a target="_self" href="{{ route('settings.account') }}">Account</a></li>
                    <li class="tab col s3"><a target="_self" href="{{ route('settings.security') }}">Security</a></li>
                    <li class="tab col s3"><a class="active">Sessions</a></li>
                </ul>
            </div>
        </div>
        @include('partials.alerts.status')
        <h4 class="light">Current Active Sessions</h4>
        <div class="divider"></div>
        <table class="highlight">
            <thead>
            <tr>
                <th>Browser</th>
                <th>Platform</th>
                <th>IP Address</th>
                <th>Last Activity</th>
                <th class="center">
                    <form method="POST">
                        {{ csrf_field() }}
                        <input type="hidden" name="logoutall" value="1">
                        <button class="btn-flat waves-effect waves-red">Logout All</button>
                    </form>
                </th>
            </tr>
            </thead>
            <tbody>
            @foreach($sessions as $id => $session)
                <tr title="{{ $session['raw_useragent'] }}">
                    <td>{{ $session['browser'] }}</td>
                    <td>{{ $session['platform'] }}</td>
                    <td>{{ $session['ip_address'] }}</td>
                    <td>{{ $session['last_activity'] }}</td>
                    <td class="center">
                        <form method="POST">
                            {{ csrf_field() }}
                            <input type="hidden" name="sessionId" value="{{ $id }}">
                            @if(session()->getId() === $id)
                                <button type="submit" class="btn waves-effect waves-light">Current<i class="material-icons right">person_pin</i>
                                </button>
                            @else
                                <button type="submit" class="btn-flat waves-effect waves-orange">Logout</button>
                            @endif
                        </form>
                    </td>
                </tr>
            @endforeach
            </tbody>
        </table>
    </div>
@endsection
