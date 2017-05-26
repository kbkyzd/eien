@if(count($errors) > 0)
    @component('partials.alerts.error')
        @foreach($errors->all() as $error)
            {{ $error }}<br>
        @endforeach
    @endcomponent
@endif
