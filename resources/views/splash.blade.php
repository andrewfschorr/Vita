<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>VitaPages | Websites and a web presence for your busines</title>
    <meta name="description" content="VitaPages is a website builder for your small business. You need a web presence. Get it a VitaPage."/>
    <link href="{{ asset('styles/splash.css') }}" rel="stylesheet">
</head>
<body>
    <div class="pane"></div>
    <nav class="navbar navbar-expand-lg">
        <div class="container">
            <a class="navbar-brand" href="{{ url('/') }}">
                <h1 class="bold">VitaPages</h1>
            </a>
        </div>
    </nav>
    <div id="splashCpt"></div>
    <script src="{{ asset('js/vendor.js') }}"></script>
    <script src="{{ asset('js/splash.js') }}"></script>
</body>
</html>
