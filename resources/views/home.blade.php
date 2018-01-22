@section('pageStyle')
<link href="{{ asset('styles/home.css') }}" rel="stylesheet">
@endsection

@extends('layouts.vita')

@section('content')
<div class="container-fluid">
    <div class="row">
        <nav class="col-md-2 d-none d-md-block sidebar">
            <div class="side-nav">
                <h3>Pages</h3>
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
            </div>
        </nav>
        <main role="main" clas="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
            <p>this is the thing</p>
        </main>
    </div>
</div>

@endsection
