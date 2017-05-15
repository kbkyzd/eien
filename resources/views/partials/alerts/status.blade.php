@if(session('status-success'))
    @component('partials.alerts.success')
        {{ session('status-success') }}
    @endcomponent
@elseif(session('status-error'))
    @component('partials.alerts.error')
        {{ session('status-error') }}
    @endcomponent
@endif