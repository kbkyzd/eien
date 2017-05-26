@extends('layouts.main')
@section('title', 'Dashboard')

@section('content')
    <div class="container">
        @include('partials.alerts.status')
        <div class="row">
            <div class="col s12">
                <form method="GET" action="{{ route('bus.search.services') }}">
                    <h4>Dashboard</h4>
                    <div class="divider"></div>
                    <div class="section">
                        <h5>Bus Services</h5>
                        <div class="row">
                            <div class="input-field col s10">
                                <input id="service" type="text" name="service" class="autocomplete">
                                <label for="service">Search Services</label>
                            </div>
                            <div class="col s2 center">
                                <button type="submit" class="waves-effect waves-light btn-large">Lookup</button>
                            </div>
                        </div>
                    </div>
                </form>
                <form method="GET" action="{{ route('bus.search.stops') }}">
                    <div class="section">
                        <h5>Stops</h5>
                        <div class="row">
                            <div class="input-field col s10">
                                <input id="stop" type="text" name="stop" class="autocomplete">
                                <label for="stop">Search Stops</label>
                            </div>
                            <div class="col s2 center">
                                <button type="submit" class="waves-effect waves-light btn-large">Lookup</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <div class="row">
            <div class="col s12">
                <h4>Arrivals Overview</h4>
                <table class="centered">
                    <thead>
                    <tr>
                        <th>Stop ID</th>
                        <th>Service</th>
                        <th>Name</th>
                        <th>Next ETA</th>
                    </tr>
                    </thead>
                    <tbody>
                    @foreach($watchlist as $watched)
                        <tr>
                            <td>{{ $watched->bus_stop_id }}</td>
                            <td>{{ $watched->bus_service }}</td>
                            <td>{{ $watched->name }}</td>
                            @if($eta[$loop->index] !== 'Not In Operation')
                                <td title="{{ $eta[$loop->index]->toAtomString() }}">
                                    <a href="{{ route('bus.info.stops', ['userId' => $watched->bus_stop_id]) }}?bus={{ $watched->bus_service }}">{{ $eta[$loop->index]->diffForHumans() }}</a>
                                </td>
                            @else
                                <td title="Unavailable">
                                    <a href="{{ route('bus.info.stops', ['userId' => $watched->bus_stop_id]) }}?bus={{ $watched->bus_service }}">Not In Operation</a>
                                </td>
                            @endif
                            <td title="Toggle Notification">
                                <form id="togglenotify{{ $watched->id }}" action="{{ route('bus.list.toggle.notify') }}" method="POST">
                                    {{ csrf_field() }}
                                    @if($watched->notify)
                                        <i class="material-icons cursor_on_hover" onclick="$('#togglenotify{{ $watched->id }}').submit();">notifications_active</i>
                                    @else
                                        <i class="material-icons cursor_on_hover grey-text" onclick="$('#togglenotify{{ $watched->id }}').submit();">notifications_off</i>
                                    @endif
                                    <input type="hidden" name="watch_id" value="{{ $watched->id }}">
                                </form>
                            </td>
                        </tr>
                    @endforeach
                    </tbody>
                </table>
                <a class="btn waves-light waves-effect right" href="{{ route('bus.list.view') }}">View List</a>
                <p><span class="red-text">*</span>Data is updated every 45 seconds.</p>
            </div>
        </div>

    </div>
@endsection
@section('scripts')
    <script>
        $(function() {
            $.getJSON('/bus/autocomplete', function(data) {
                $('#stop.autocomplete').autocomplete({
                    data: data,
                    limit: 10,
                    onAutocomplete: function(val) {
                        $(location).attr('href', '{{ url('/bus/info/stops') }}/' + val)
                    },
                    minLength: 1
                })
            })
        });
    </script>
@endsection
