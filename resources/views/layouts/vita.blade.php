<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Styles -->
    <link href="{{ asset('css/global.css') }}" rel="stylesheet">
</head>
<body>
@yield('content')
<script src="{{ asset('js/manifest.js') }}" defer></script>
<script src="{{ asset('js/vendor.js') }}" defer></script>
<script src="{{ asset('js/app.js') }}" defer></script>
@yield('pageScript')
</body>
</html>
