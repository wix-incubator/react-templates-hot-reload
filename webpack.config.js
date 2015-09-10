'use strict';
var path = require('path');
var webpack = require('webpack');
//var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('rt-main.js');

module.exports = {
    devtool: 'eval',
    context: __dirname,
    entry: {
    app: ['webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/app-main.js']
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    externals: {
        // require("jquery") is external and available on the global var jQuery
        jquery: 'jQuery',
        react: 'React',
        lodash: '_'
    },
    resolve: {
        // you can now require('file') instead of require('file.coffee')
        extensions: ['', '.js', '.json']
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loaders: ['react-hot', 'babel-loader']},
            {test: /\.jsx$/, loaders: ['babel-loader']},
            {test: /\.html$/, loader: 'file?name=[name].[ext]'},
            {test: /\.json$/, loader: 'json-loader'},
            {test: /\.less$/, loader: 'style-loader!css-loader!less-loader'}, // use ! to chain loaders
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.scss$/, loader: 'style!css!sass'},
            {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}, // inline base64 URLs for <=8k images, direct URLs for the rest
            {test: /\.rt/, exclude: /samples/, loaders: ['react-hot', 'react-templates-loader']},
            {test: /\.text/, loaders: ['raw-loader']},
            //"md|markdown": ["html-loader", "markdown-loader"]
        ]
    }
};