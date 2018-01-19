const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.webpackConfig({
    // resolve: {
    //     modules: [
    //         path.resolve(__dirname, 'vendor/laravel/spark/resources/assets/js')
    //     ]
    // }
});

mix
    .react('resources/assets/js/app.js', 'public/js')
    .extract(['react'])
    .js('resources/assets/js/register.js', 'public/js')
    .js('resources/assets/js/welcome.js', 'public/js')
    .sass('resources/assets/sass/global.scss', 'public/css');



mix.disableNotifications();
