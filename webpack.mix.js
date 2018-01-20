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
    .webpackConfig({
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                plugins: ['react-css-modules']
                            }
                        }
                    ]
                },
                {
                    test: /\.css$/,
                    exclude: [],
                    loader:
                        'style-loader!css-loader?modules=true&localIdentName=[path]__[name]__[local]___[hash:base64:5]'
                }
            ]
        },
        plugins: [new ExtractTextPlugin('[name].css', { allChunks: true })]
    })
    .react('resources/assets/js/app.js', 'public/js')
    .extract(['react'])
    .js('resources/assets/js/register.js', 'public/js')
    .js('resources/assets/js/welcome.js', 'public/js')
    .sass('resources/assets/sass/app.scss', 'public/css');

mix.disableNotifications();
