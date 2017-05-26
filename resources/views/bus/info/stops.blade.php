@extends('layouts.main')
@section('title', 'Dashboard')

@section('content')
    <div class="container">
        <div class="row">
            <div class="section">
                <h4 class="light">{{ $stopInfo->name }}</h4>
                <h6>{{ sprintf('%s %s %s', $approxCoord->getStreetName(), $approxCoord->getStreetNumber(), $approxCoord->getPostalCode()) }}</h6>
                <div class="divider"></div>
                <div class="section">
                    <div style="width: auto; height: 400px;">
                        {!! Mapper::render() !!}
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="section">
                <h4 class="light">Available Services</h4>
                <div class="divider"></div>

                <ul class="collapsible" data-collapsible="expandable">
                    @foreach($arrivals as $arrival)
                        <li>
                            <div class="collapsible-header {{ request()->bus === $arrival->ServiceNo ? 'active' : '' }}">
                                {{ $arrival->ServiceNo }}
                                <span title="{{ (new Carbon\Carbon($arrival->NextBus->EstimatedArrival))->toRssString() }}" class="badge"> {{ $eta[$loop->index] }}</span>
                                @if($arrival->Status === 'In Operation')
                                    <span class="new badge light-green">{{ $arrival->Status }}</span>
                                @else
                                    <span class="new badge red">{{ $arrival->Status }}</span>
                                @endif

                                @if($arrival->NextBus->Load === 'Seats Available')
                                    <span class="new badge green">{{ $arrival->NextBus->Load }}</span>
                                @elseif($arrival->NextBus->Load === 'Standing Available')
                                    <span class="new badge orange">{{ $arrival->NextBus->Load }}</span>
                                @elseif($arrival->NextBus->Load === 'Limited Standing')
                                    <span class="new badge red">{{ $arrival->NextBus->Load }}</span>
                                @endif

                                @if($arrival->NextBus->Feature === 'WAB')
                                    <span title="Wheel-chair Accessible Bus" class="new badge blue">{{ $arrival->NextBus->Feature }}</span>
                                @endif

                                @if(collect(["1N", "2N", "3N", "4N", "5N", "6N", "NR1", "NR2", "NR3", "NR5", "NR6", "NR7", "NR8"])->contains($arrival->ServiceNo))
                                    <span title="NiteRider/Nite Owl" class="new badge dark-blue">Night</span>
                                @endif
                            </div>

                            <div class="collapsible-body">
                                @if($arrival->Status === 'In Operation')
                                    <h5 class="light">Next bus arrives in: {{ $eta[$loop->index] }}</h5>
                                    <p>
                                        <br>
                                        Originating from:
                                        <a href="{{ route('bus.info.stops', ['stopId' => $arrival->OriginatingID]) }}">{{ $arrival->OriginatingID }}</a> {{ request()->stopId === $arrival->OriginatingID ? '(This Stop)' : '' }}
                                        <br>
                                        Terminates at:
                                        <a href="{{ route('bus.info.stops', ['stopId' => $arrival->TerminatingID]) }}">{{ $arrival->TerminatingID }}</a> {{ request()->stopId === $arrival->TerminatingID ? '(This Stop)' : '' }}
                                        <br>
                                        Current Bus Load: {{ $arrival->NextBus->Load }}
                                        <br>
                                        Operator: {{ $arrival->Operator }}
                                        <br>
                                        <a href="{{ url()->current() . '?bus=' . $arrival->ServiceNo }}" class="btn waves-light waves-effect right {{ $arrival->ServiceNo === request()->bus ? 'disabled' : '' }}"><i class="material-icons left">search</i>View Route</a>
                                        @if(Auth::user()->watchlist()->where([['bus_service', $arrival->ServiceNo],['bus_stop_id', request()->stopId]])->count())
                                            <a class="btn waves-light waves-effect right" disabled><i class="material-icons left">add_circle_outline</i>Already watching</a>
                                        @else
                                            <a onclick="$('#addtolist{{ $arrival->ServiceNo }}').submit();" class="btn waves-light waves-effect right"><i class="material-icons left">add_circle_outline</i>Add to watchlist</a>
                                        @endif
                                        Approx Coords:
                                        @if($arrival->NextBus->Latitude === "0" && $arrival->NextBus->Longitude === "0")
                                            Unavailable
                                        @else
                                            <a target="_blank" href="https://www.google.com/maps/search/{{ $arrival->NextBus->Latitude }},{{ $arrival->NextBus->Longitude }}">{{ $arrival->NextBus->Latitude . ', ' . $arrival->NextBus->Longitude }}</a>
                                        @endif
                                        <br>
                                    </p>
                                    <div class="divider"></div>
                                    <h5 class="light">Subsequent Buses: {{ (new Carbon\Carbon($arrival->SubsequentBus->EstimatedArrival))->diffForHumans(null, true) }}, {{ (new Carbon\Carbon($arrival->SubsequentBus3->EstimatedArrival))->diffForHumans(null, true) }}</h5>
                                @else
                                    <h5 class="light">Inactive</h5>
                                @endif
                            </div>
                        </li>
                        <form id="addtolist{{ $arrival->ServiceNo }}" action="{{ route('bus.list.add') }}" method="POST">
                            {{ csrf_field() }}
                            <input type="hidden" name="stop" value="{{ request()->stopId }}">
                            <input type="hidden" name="bus" value="{{ $arrival->ServiceNo }}">
                        </form>
                    @endforeach
                </ul>
                <p>*Data is cached every 45 seconds. </p>
            </div>
        </div>


        <div class="row">
            <div class="section">
                <h4 class="light">Ambient</h4>
                <div class="divider"></div>
                @if(! $ambient->isEmpty())
                    <h5>Approximate Temperature: {{ $ambient->avg('temp') }}°C </h5>
                    <h5>Approximate Humidity: {{ $ambient->avg('humi') }}% </h5>
                @else
                    <p>No available data for this stop</p>
                @endif
            </div>
        </div>
        <a class="right btn waves-effect" href="{{ route('bus.dashboard') }}">Return</a>
    </div>
@endsection
