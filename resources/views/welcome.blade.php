@section('pageStyle')
<link href="{{ asset('styles/home.css') }}" rel="stylesheet">
@endsection


@extends('layouts.vita')

@section('content')
<p>helo</p>
<div id="exampleDomEl"></div>
@endsection
@section('pageScript')
<script src="{{ asset('js/home.js') }}" defer></script>
@endsection
