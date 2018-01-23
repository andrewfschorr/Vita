@section('pageStyle')
<link href="{{ asset('styles/home.css') }}" rel="stylesheet">
@endsection
@extends('layouts.vita')
@section('content')
<div class="container-fluid">
    <div class="row">
        <nav class="col-2  sidebar">
            <div class="side-nav">
                <!-- <h5>Profile</h5>
                <ul>
                    <li>
                        <a href="#">
                            <img src="{{ asset('icons/cog.svg') }}" alt="document" class="icon">
                            Page Info
                        </a>
                    </li>
                </ul> -->
                <h5>Pages</h5>
                <ul>
                    <li>
                        <a href="#">
                           <img src="{{ asset('icons/star.svg') }}" alt="document" class="icon">
                           Home
                        </a>
                    </li>
                    <li>
                        <a href="#">
                           <img src="{{ asset('icons/document.svg') }}" alt="document" class="icon">
                           Page One
                        </a>
                    </li>
                    <li>
                        <a href="#">
                           <img src="{{ asset('icons/document.svg') }}" alt="document" class="icon">
                           Two three And Four five siz seven 8 nine ten eleve
                        </a>
                    </li>
                </ul>
                <hr>
                <a href="/add-page">+ Add new page</a>
            </div>
        </nav>
        <main role="main" class="col-10 pt-3 px-4">
            <div class="row justify-content-md-center">
                <div class="col col-10 info-section">
                    <h4>Site Info</h4>
                    <p>he</p>
                    <p>helloo </p>
                    <p>hi again</p>
                </div>
            </div>
        </main>
    </div>
</div>
@endsection @section('pageScript')
<script src="{{ asset('js/home.js') }}" defer></script> @endsection
