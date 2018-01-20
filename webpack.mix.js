const mix = require('laravel-mix');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
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
mix
    .react('resources/assets/js/app.js', 'public/js')
    .extract(['react'])
    .js('resources/assets/js/register.js', 'public/js')
    .js('resources/assets/js/welcome.js', 'public/js')
    .sass('resources/assets/sass/app.scss', 'public/css')
    .webpackConfig({
        module: {
            // rules: [
            //     {
            //         test: /\.jsx?$/,
            //         use: [
            //             {
            //                 loader: 'babel-loader',
            //                 options: {
            //                     plugins: ['react-css-modules']
            //                 }
            //             }
            //         ]
            //     },
            //     {
            //         loaders: [
            //             'style-loader',
            //             'css-loader?importLoader=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
            //         ],
            //         test: /\.css$/
            //     },
            //     {
            //         test: /\.s[ac]ss$/,
            //         loaders: [
            //             'style-loader',
            //             'css-loader',
            //             'sass-loader?importLoader=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
            //         ]
            //     },
            // ]
        },
        // plugins: [new ExtractTextPlugin('[name].css', { allChunks: true })]
    });

mix.disableNotifications();
