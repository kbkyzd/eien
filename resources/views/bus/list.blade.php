@extends('layouts.main')
@section('title', 'Dashboard')

@section('content')
    <div class="container">
        <div class="row">
            <div class="section">
                <h4>Current Bus Watch list</h4>
                <div class="divider"></div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <table>
                <thead>
                <tr>
                    <th>Stop ID</th>
                    <th>Service</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                @foreach($lists as $list)
                    <tr>
                        <td>{{ $list->bus_stop_id }}</td>
                        <td>{{ $list->bus_service }}</td>
                        <td>{{ $list->name }}</td>
                        <td>{{ $list->description }}</td>
                        <td>
                            <form id="delform{{ $list->id }}" action="{{ route('bus.list.delete') }}" method="POST">
                                {{ csrf_field() }}
                                <a href="{{ route('bus.list.edit', ['id' => $list->id]) }}"><i title="Edit" class="material-icons solid_on_hover">mode_edit</i></a>
                                <i title="Delete" class="material-icons solid_on_hover" onclick="$('#delform{{ $list->id }}').submit();">delete</i>
                                <input type="hidden" name="watch_id" value="{{ $list->id }}">
                            </form>
                        </td>
                    </tr>
                @endforeach
                </tbody>
            </table>
            <a class="btn waves-effect waves-light" href="{{ route('bus.dashboard') }}">Return</a>
        </div>
    </div>
@endsection
