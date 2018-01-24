@section('pageStyle')
<link href="{{ asset('styles/dashboard.css') }}" rel="stylesheet">
@endsection
@extends('layouts.vita')
@section('content')
<div class="container-fluid">
    <div id="dashboardDomEl"></div>
</div>
@endsection @section('pageScript')
<script src="{{ asset('js/dashboard.js') }}" defer></script> @endsection
