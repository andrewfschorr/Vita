const mix = require('laravel-mix');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

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
    // .webpackConfig({
    //     plugins: [
    //         // new webpack.LoaderOptionsPlugin({
    //         //     minimize: Mix.inProduction(),
    //         //     options: {
    //         //         context: __dirname,
    //         //         output: { path: './' }
    //         //     }
    //         // })
    //     ],
    //     module: {
    //         rules: [
    //             {
    //                 test: /\.s[ac]ss$/,
    //                 exclude: Config.preprocessors.sass ? Config.preprocessors.sass.map(sass => sass.src.path()) : [],
    //                 use: ExtractTextPlugin.extract({
    //                     fallback: 'style-loader',
    //                     // Could also be write as follow:
    //                     // use: 'css-loader?modules&importLoader=2&sourceMap&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader'
    //                     use: [
    //                         {
    //                             loader: 'css-loader',
    //                             query: {
    //                                 modules: true,
    //                                 sourceMap: true,
    //                                 importLoaders: 2,
    //                                 localIdentName: '[path]__[name]__[local]___[hash:base64:5]',
    //                                 // getLocalIdent: function() {
    //                                 //     return 'hello';
    //                                 // }
    //                             }
    //                         },
    //                         'sass-loader'
    //                     ]
    //                 }),
    //             },
    //             {
    //                 test: /\.css$/,
    //                 exclude: Config.preprocessors.postCss ? Config.preprocessors.postCss.map(postCss => postCss.src.path()) : [],
    //                 loaders: ['style-loader', 'css-loader?modules="true"&importLoaders="1"&localIdentName=[path]', 'postcss-loader']
    //             },
    //             {
    //                 test: /\.(woff2?|ttf|eot|svg|otf)$/,
    //                 loader: 'file-loader',
    //                 options: {
    //                     name: path => {
    //                         if (! /node_modules|bower_components/.test(path)) {
    //                             return Config.fileLoaderDirs.fonts + '/[name].[ext]?[hash]';
    //                         }

    //                         return Config.fileLoaderDirs.fonts + '/vendor/' + path
    //                             .replace(/\\/g, '/')
    //                             .replace(
    //                                 /((.*(node_modules|bower_components))|fonts|font|assets)\//g, ''
    //                             ) + '?[hash]';
    //                     },
    //                     publicPath: Config.resourceRoot
    //                 }
    //             },{
    //                 loader: 'resolve-url-loader',
    //                 options: {
    //                     sourceMap: true,
    //                     root: Mix.paths.root('node_modules')
    //                 }
    //             }
    //         ]
    //     }
    // })
    .react('resources/assets/js/app.js', 'public/js')
    .extract(['react'])
    .js('resources/assets/js/register.js', 'public/js')
    .js('resources/assets/js/welcome.js', 'public/js')
    .sass('resources/assets/sass/global.scss', 'public/css')
    // .sass('resources/assets/sass/welcome.scss', 'public/css');


mix.disableNotifications();
