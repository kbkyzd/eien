@extends('layouts.main')
@section('title', 'Settings > Account')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col s12">
                <ul class="tabs tabs-fixed-width">
                    <li class="tab col s3"><a class="active">Account</a></li>
                    <li class="tab col s3"><a target="_self" href="{{ route('settings.security') }}">Security</a></li>
                    <li class="tab col s3"><a target="_self" href="{{ route('settings.session') }}">Sessions</a></li>
                </ul>
            </div>
        </div>
        @include('partials.alerts.status')
        <h4 class="light">Notification Settings</h4>
        <div class="divider"></div>
        <div class="col s12">
            <div class="row">
                <div class="card-panel {{ Auth::user()->telegram_id ? 'lime lighten-2' : 'red lighten-5' }}">
                    <h5 class="light">Telegram Configuration</h5>
                    <form action="{{ route('settings.telegram.verify') }}" method="POST">
                        {{ csrf_field() }}
                        @if(Auth::user()->telegram_id)
                            <p>Username Active: {{ Auth::user()->telegram_username }}</p>
                            <a href="{{ route('settings.telegram.disable') }}" class="btn tooltipped right red waves-effect waves-light" data-tooltip="Removes any binded telegram accounts">Disable</a>
                            <a href="{{ route('settings.telegram.sendtest') }}" class="btn tooltipped right blue waves-effect waves-light" data-tooltip="Sends a test telegram to the account">Test</a>
                            &nbsp;
                        @else
                            <p>Telegram Inactive (Your Token: {{ Auth::user()->ot_token->ot_token ?? 'No token generated' }}, Bot:
                                <a target="_blank" href="https://telegram.me/{{ config('services.telegram-bot-api.username') }}">{{ '@' . config('services.telegram-bot-api.username') }})</a>
                            </p>
                            <div class="input-field">
                                <input id="telegram_username" type="text" name="telegram_username">
                                <label for="telegram_username">Telegram Username</label>
                            </div>
                            <button type="submit" class="btn right">Verify</button>
                            <a class="btn right waves-effect waves-light" href="{{ route('settings.telegram.generatesecret') }}">
                                @if(empty(Auth::user()->ot_token->ot_token))
                                    Generate Secret
                                @else
                                    Regenerate Secret
                                @endif
                            </a>

                            &nbsp;
                        @endif
                    </form>
                </div>
            </div>
        </div>


        <h4 class="light">User Settings</h4>
        <div class="col s12">
            <div class="row">
                <div class="card-panel">
                    <h5 class="light">Language</h5>
                    <form action="{{ route('settings.account') }}">
                        <div class="input-field col s6">
                            <select>
                                {{-- overly simplistic, I know --}}
                                <option value="en" {{ Auth::user()->lang === 'en' ? 'selected' : '' }}>English</option>
                                <option value="jp" {{ Auth::user()->lang === 'jp' ? 'selected' : '' }}>日本語</option>
                            </select>
                            <label>Language</label>
                        </div>
                        <div class="input-field col s6">
                            <select>
                                {{-- overly simplistic, I know --}}
                                <option value="en" {{ Auth::user()->lang === 'en' ? 'selected' : '' }}>English</option>
                                <option value="jp" {{ Auth::user()->lang === 'jp' ? 'selected' : '' }}>日本語</option>
                            </select>
                            <label>Language</label>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi commodi dicta dolorum enim et hic inventore laboriosam, mollitia necessitatibus non odit omnis quae qui quis repellat sint vel. Aspernatur aut dolore eaque error est minus molestiae nihil numquam sit suscipit? Animi culpa eligendi, eos natus, neque odio officia porro reiciendis saepe temporibus ullam voluptate. Ad eum exercitationem iste magni officia perferendis totam veritatis. Animi beatae distinctio eaque maxime nam. Accusantium deserunt distinctio fuga, ipsum libero perspiciatis sapiente! Atque commodi consequatur excepturi explicabo! Aliquid aperiam, blanditiis deleniti, dolore ducimus et facilis fuga libero nesciunt non nulla numquam quibusdam similique sunt vel.</p>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
