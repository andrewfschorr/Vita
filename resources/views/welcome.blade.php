@section('pageStyle')
<link href="{{ asset('styles/welcome.css') }}" rel="stylesheet">
@endsection
@extends('layouts.vita')
@section('content')
<div id="welcomeCpt"></div>
@endsection
@section('pageScript')
<script src="{{ asset('js/welcome.js') }}" defer></script>
@endsection
