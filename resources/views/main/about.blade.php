@extends('layouts.main')
@section('title', 'About')

@section('content')
    <div class="container">
        <div class="row">
            <div class="about">
                <h2 class="light">eien?</h2>
                <h4>What is it?</h4>
                <p>eien/永遠 is a webapp built with Laravel. </p>

                <h4>Disclaimers and other boring stuff</h4>
                <p>Amatsuka Mao is a personal alias.</p>
                <p>All code (including sensor related stuff) is licensed under the BSD 2-Clause license. You can view the source of everything at the respective
                    <a href="https://github.com/kbkyzd">github repositories</a>.</p>
                <p>The app makes use of data from MyTransport, which is licensed under the
                    <a href="https://www.mytransport.sg/content/mytransport/home/dataMall/opendatalicence.html">Singapore Open Data License</a>.
                </p>
                <p>You can contact me <a href="mailto:mao@amatsuka.me">here</a>.</p>

            </div>
        </div>
    </div>
@endsection
