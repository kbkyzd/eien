@extends('layouts.main')

@section('content')
    <div class="container">
        <div class="row">
            <h3>{{ Auth::user()->name }}</h3>
            <div class="col s12">
                <ul class="tabs">
                    <li class="tab col s3"><a href="#tabProfile">Profile</a></li>
                    <li class="tab col s3"><a href="#tabSecurity">Security</a></li>
                    <li class="tab col s3"><a href="#tabSessions">Sessions</a></li>
                    <li class="tab col s3"><a href="#test4">Test 4</a></li>
                </ul>
            </div>
            <div id="tabProfile" class="col s12">
            </div>
            <div id="tabSecurity" class="col s12">
                @if (Auth::user()->twofa_secret)
                    <a href="{{ url('TFA/disable') }}" class="btn btn-warning">Disable 2FA</a>
                @else
                    <a href="{{ url('TFA/enable') }}" class="btn btn-primary">Enable 2FA</a>
                @endif
            </div>
            <div id="tabSessions" class="col s12">
                <h4 class="light">Current Active Sessions</h4>

                <table>
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
                        <tr>
                            <td>{{ $session['browser'] }}</td>
                            <td>{{ $session['platform'] }}</td>
                            <td>{{ $session['ip_address'] }}</td>
                            <td>{{ $session['last_activity'] }}</td>
                            <td class="center">
                                <form method="POST">
                                    {{ csrf_field() }}
                                    <input type="hidden" name="session" value="{{ $id }}">
                                    @if(session()->getId() === $id)
                                        <button type="submit" class="btn waves-effect waves-light">Current<i class="material-icons right">person_pin</i></button>
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
            <div id="test4" class="col s12">

            </div>


        </div>
    </div>
@endsection
