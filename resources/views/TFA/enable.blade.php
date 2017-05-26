@extends('layouts.main')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col s12">
                <div class="card-panel center">
                    <h4>Secret Key</h4>

                    Open up your 2FA mobile app and scan the following QR barcode:
                    <br/>
                    <img alt="Image of QR barcode" src="{{ $image }}"/>

                    <br/>
                    If your 2FA mobile app does not support QR barcodes,
                    enter in the following number: <code>{{ $secret }}</code>
                    <br/><br/>
                    <a class="btn waves-light waves-effect" href="{{ url()->previous() }}">Return</a>
                </div>
            </div>
        </div>
    </div>
@endsection