var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var webpack = require('webpack');

module.exports = [
    {
        entry: "./src/js/app.js",
        output: {
            path: 'dist',
            filename: "js/bundle.js"
        },
        module: {
            loaders: [
                {test: /\.jsx?$/, loader: "babel", query: {cacheDirectory: true, presets: ['es2015', 'react']}},
                {test: /\.styl$/, loaders: ['style', 'css', 'stylus']},
                {test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css?sourceMap,minimize')},
                {test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/, loader: 'file?name=app/[path][name].[ext]?[hash]&context=./src/'},
                {test: /\.(html|xml|txt)$/, loader: 'file?name=[path][name].[ext]?[hash]&context=./src/'},
            ]
        },
        plugins: [
            new CleanWebpackPlugin('dist'),
            new ExtractTextPlugin("css/default.css")
        ],
        devServer: {
            historyApiFallback: true
        }
    }
];
