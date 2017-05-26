@extends('layouts.main')
@section('title', 'Settings > Security')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col s12">
                <ul class="tabs tabs-fixed-width">
                    <li class="tab col s3"><a target="_self" href="{{ route('settings.account') }}">Account</a></li>
                    <li class="tab col s3"><a class="active">Security</a></li>
                    <li class="tab col s3"><a target="_self" href="{{ route('settings.session') }}">Sessions</a></li>
                </ul>
            </div>
        </div>
        @include('partials.alerts.status')
        <h4 class="light">Security Settings</h4>
        <div class="col s12">
            <div class="row">
                <div class="card-panel">
                    <ul class="collection">
                        @if ($user->twofa_secret)
                            <li class="collection-item">
                                <span class="badge new green">Enabled</span>Two Factor Authentication<a href="{{ url('tfa/disable') }}" class="secondary-content right" title="Disable 2FA"><i class="material-icons red-text">clear</i></a>
                            </li>
                        @else
                            <a class="collection-item" href="{{ url('TFA/enable') }}" class="btn btn-primary"><span class="badge new red">Disabled</span>Enable 2FA</a>
                        @endif

                        @if ($user->api_token)
                            <li class="collection-item">API Key:
                                <span class="spoiler">{{ $user->api_token }}</span><a href="{{ route('settings.enable.api') }}" class="secondary-content right" title="Regenerate Secret"><i class="material-icons green-text">refresh</i></a>
                            </li>
                        @else
                            <a class="collection-item" href="{{ route('settings.enable.api') }}" class="btn btn-primary"><span class="badge new red">Disabled</span>Enable API Access</a>
                        @endif
                    </ul>
                </div>
            </div>
        </div>
@endsection
