@extends('layouts.main')
@section('title', 'Dashboard')

@section('content')
    <form id="edit" method="POST">
        {{ csrf_field() }}
        <div class="container">
            @include('partials.alerts.status')
            @include('partials.alerts.errorviewbag')
            <div class="row">
                <div class="section">
                    <div class="switch form-switch right">
                        <label>
                            Off
                            <input name="notify" type="checkbox" {{ $lists->notify === 1 ? 'checked' : ''}}>
                            <span class="lever tooltipped" data-position="top" data-tooltip="Notifications Status" data-delay="550"></span>
                            On
                        </label>
                    </div>
                    <h4>Editing Stop <span class="pink-text text-lighten-2">{{ $lists->bus_stop_id }}</span></h4>
                    <h6>{{ sprintf('%s %s %s', $coords->getStreetName(), $coords->getStreetNumber(), $coords->getPostalCode()) }} (Lat: {{ $coords->getLatitude() }}, Long: {{ $coords->getLongitude() }})</h6>
                    <div class="divider"></div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col s12">
                    <div class="row">
                        <div class="input-field col s12 m3">
                            <input disabled id="bus_stop" class="active" type="text" value="{{ $lists->bus_stop_id }}">
                            <label for="bus_stop">Bus Stop</label>
                        </div>
                        <div class="input-field col s12 m3">
                            <input disabled id="bus_service" class="active" type="text" value="{{ $lists->bus_service }}">
                            <label for="bus_service">Service</label>
                        </div>
                        <div class="input-field col s12 m6">
                            <input id="list_name" class="active {{ $errors->has('list_name') ? 'invalid' : '' }}" name="list_name" type="text" value="{{ $lists->name }}" data-length="80">
                            <label for="list_name">Name</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <textarea id="list_description" class="active materialize-textarea {{ $errors->has('list_description') ? 'invalid' : '' }}" name="list_description" type="text">{{ $lists->description }}</textarea>
                            <label for="list_description">Description</label>
                        </div>
                    </div>
                    <div class="row">
                        <h5 class="light">Notification</h5>
                        <div class="input-field col s6">
                            <input id="start_timepicker" value="{{ $lists->start }}" class="timepicker {{ $errors->has('start_time') ? 'invalid' : '' }}" type="time" name="start_time">
                            <label for="start_timepicker">Start</label>
                        </div>
                        <div class="input-field col s6">
                            <input id="end_timepicker" value="{{ $lists->end }}" class="timepicker {{ $errors->has('end_time') ? 'invalid' : '' }}" type="time" name="end_time">
                            <label for="end_timepicker">End</label>
                        </div>
                    </div>
                    <div class="fixed-action-btn">
                        <a class="btn-floating btn-large pink darken-3">
                            <i class="large material-icons">menu</i>
                        </a>
                        <ul>
                            <li onclick="$('#edit').submit();">
                                <a class="btn-floating blue tooltipped" data-position="top" data-tooltip="Save" data-delay="550"><i class="material-icons">save</i></a>
                            </li>
                            <li onclick="$('#delete').submit();">
                                <a class="btn-floating red darken-1 tooltipped" data-position="top" data-tooltip="Delete" data-delay="550"><i class="material-icons">delete</i></a>
                            </li>
                            <li>
                                <a href="{{ route('bus.list.view') }}" class="btn-floating orange darken-1 tooltipped" data-position="top" data-tooltip="Back" data-delay="550"><i class="material-icons">keyboard_return</i></a>
                            </li>
                        </ul>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <div style="height: 400px;">
                                {!! Mapper::render() !!}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a class="btn waves-light waves-effect right" href="{{ route('bus.list.view') }}">Return</a>

        </div>
    </form>
    <form id="delete" action="{{ route('bus.list.delete') }}" method="POST">
        {{ csrf_field() }}
        <input type="hidden" name="delete" value="1">
        <input type="hidden" name="watch_id" value="{{ $lists->id }}">
    </form>

@endsection
@section('scripts')

@endsection
