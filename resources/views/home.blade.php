@section('pageStyle')
<link href="{{ asset('styles/home.css') }}" rel="stylesheet">
@endsection

@extends('layouts.vita')

@section('content')
<div class="container-fluid">
    <div class="row">
        <nav class="col-2  sidebar">
            <div class="side-nav">
                <h5>Pages</h5>
                <ul>
                    <li>
                        <a href="#">HELLO</a>
                    </li>
                    <li>
                        <a href="#">HELLO</a>
                    </li>
                    <li>
                        <a href="#">HELLO</a>
                    </li>
                    <li>
                        <a href="#">HELLO</a>
                    </li>
                    <li>
                        <a href="#">HELLO</a>
                    </li>
                    <li>
                        <a href="#">HELLO</a>
                    </li>
                </ul>
                <hr>
                <a href="/add-page">+ Add new page</a>
            </div>
        </nav>
        <main role="main" class="col-10 pt-3 px-4">
            <div class="row justify-content-md-center">
                <div class="col col-10">
                    <p style="background:red">helloooo world</p>
                </div>
            </div>
        </main>
    </div>
</div>
@endsection
@section('pageScript')
<script src="{{ asset('js/home.js') }}" defer></script>
@endsection
