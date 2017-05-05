@extends('layouts.main')

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
        <div class="section">

            <div class="row">
                <div class="col s12 center">
                    <h3><i class="mdi-content-send brown-text"></i></h3>
                    <h4>Contact Us</h4>
                    <p class="left-align light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros. Morbi sem neque, posuere et pretium eget, bibendum sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis nisl maximus sed. Nulla imperdiet semper molestie. Morbi massa odio, condimentum sed ipsum ac, gravida ultrices erat. Nullam eget dignissim mauris, non tristique erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
                </div>
            </div>

        </div>
    </div>


    <div class="parallax-container valign-wrapper">
        <div class="section no-pad-bot">
            <div class="container">
                <div class="row center">
                    <h5 class="header col s12 white-text light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, unde.</h5>
                </div>
            </div>
        </div>
        <div class="parallax"><img src="http://lorempixel.com/1440/1000/food/4" alt="Unsplashed background img 3"></div>
    </div>

@endsection