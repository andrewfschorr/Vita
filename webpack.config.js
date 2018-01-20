const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        // JS
        vendor: 'react',
        app: './resources/assets/js/app.js',
        home: './resources/assets/js/home.js',
        register: './resources/assets/js/register.js',
        // CSS
        global: './resources/assets/sass/global.scss',
        foo: './resources/assets/sass/foo.scss',
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
                exclude: /node_modules/
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
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
            name: 'vendor',
        }),
    ]
};
