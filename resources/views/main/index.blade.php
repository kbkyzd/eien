@extends('layouts.main')
@section('title', 'KBKYZD')

@section('content')
    <div id="index-banner" class="parallax-container">
        <div class="section no-pad-bot">
            <div class="container main-spread">
                <br><br>
                <h1 class="header kana center white-text">@lang('site.header')</h1>
                <div class="row center">
                    <h5 class="header kana col s12 light white-text">@lang('site.sub_header')</h5>
                </div>
                <br><br>

            </div>
        </div>
        <div class="parallax"><img src="{{ url("img/flower-356919.jpg") }}"></div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col s6">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid, amet culpa cumque debitis dicta dignissimos eaque ipsam labore, laudantium, libero magni nesciunt nihil officia placeat quam rerum vitae voluptate? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias iure magni minus natus odio perferendis provident reprehenderit voluptas, voluptatem.</p>
            </div>
            <div class="col s6">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid, amet culpa cumque debitis dicta dignissimos eaque ipsam labore, laudantium, libero magni nesciunt nihil officia placeat quam rerum vitae voluptate? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid excepturi explicabo facere id ipsam pariatur recusandae saepe sequi sit, soluta.</p>
            </div>
        </div>
        <div class="col s6">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid, amet culpa cumque debitis dicta dignissimos eaque ipsam labore, laudantium, libero magni nesciunt nihil officia placeat quam rerum vitae voluptate? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet delectus doloribus eaque officiis qui quia recusandae vel veniam voluptas.</p>
        </div>
        <div class="col s6">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid, amet culpa cumque debitis dicta dignissimos eaque ipsam labore, laudantium, libero magni nesciunt nihil officia placeat quam rerum vitae voluptate? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet delectus doloribus eaque officiis qui quia recusandae vel veniam voluptas.</p>
        </div>
    </div>
@endsection
