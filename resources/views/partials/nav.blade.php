<div class="navbar-fixed">
    <nav role="navigation">
        <div class="nav-wrapper container">
            <a href="/"><img class="responsive-img brand-logo" data-alt-src="/img/KBKYZD.png" src="{{ url("img/KBKYZD-alt.png") }}"></a>
            <a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">menu</i></a>
            <ul class="right hide-on-med-and-down">
                <li><a href="{{ route('bus.dashboard') }}">Bus</a></li>
                <li><a href="{{ url('/v1/api') }}">API</a></li>

                @if(Auth::check())
                    <ul id="userdropdown" class="dropdown-content">
                        <li><a href="{{ route('user.profile') }}">Profile</a></li>
                        <li><a href="{{ route('settings.account') }}">Settings</a></li>
                        @role('root|mod')
                        <li><a href="{{ url('/eien') }}">Admin</a></li>
                        @endrole
                        <li class="divider"></li>
                        <li>
                            <a href="{{ route('logout') }}" onclick="event.preventDefault(); $('#logout-form').submit();">
                                Logout
                            </a>
                            <form id="logout-form" action="{{ route('logout') }}" method="POST">
                                {{ csrf_field() }}
                            </form>
                        </li>
                    </ul>
                    <li>
                        <a class="dropdown-button" data-activates="userdropdown" data-constraintWidth="false" data-belowOrigin="true">{{ Auth::user()->username }}
                            <i class="material-icons right">more_vert</i></a></li>
                @else
                    <li><a href="{{ url('/login') }}">Login</a></li>
                    <li><a href="{{ url('/register') }}">Register</a></li>
                @endif

            </ul>
        </div>
    </nav>
</div>
<ul id="nav-mobile" class="side-nav">
    <li><img class="responsive-img brand-logo" src="{{ url("img/KBKYZD.png") }}"></li>
    @if(Auth::check())
        <li><a href="{{ url('/home') }}">Home</a></li>
        <li><a href="{{ route('user.profile') }}">Profile</a></li>
        <li><a href="{{ route('settings.account') }}">Settings</a></li>
        <li><a href="{{ route('bus.dashboard') }}">Bus</a></li>
        @role('root|mod')
        <li><a href="{{ url('/eien') }}">Admin</a></li>
        @endrole
        <li>
            <a href="{{ route('logout') }}" onclick="event.preventDefault(); $('#nav-mobile-logout-form').submit();">
                Logout
            </a>
            <form id="nav-mobile-logout-form" action="{{ route('logout') }}" method="POST">
                {{ csrf_field() }}
            </form>
        </li>
    @else
        <li><a href="{{ url('/login') }}">Login</a></li>
        <li><a href="{{ url('/register') }}">Register</a></li>
    @endif
</ul>
