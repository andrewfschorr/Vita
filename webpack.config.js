const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        // TODO figure out a way to not manually list out all of them
        // JS
        vendor: 'react',
        app: './resources/assets/js/app.js',
        home: './resources/assets/js/home.js',
        register: './resources/assets/js/register.js',
        // CSS
        global: './resources/assets/sass/app.global.scss',
        foo: './resources/assets/sass/app.global.scss'
    },
    output: {
        path: path.resolve('public/js'),
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    plugins: ['react-css-modules']
                }
            },
            {
                // for testing, no one should ever be using plain css in 2018
                // test: /\.css$/,
                // exclude: /node_modules/,
                // loaders: [
                //     'style-loader',
                //     'css-loader?importLoader=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
                // ]
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                // local CSS modules
                test: /^((?!\.global).)*\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader?importLoader=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]', 'sass-loader']
                })
            },
            {
                // Global plain ol sass
                test: /\.global\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '../styles/[name].css'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        })
    ]
};