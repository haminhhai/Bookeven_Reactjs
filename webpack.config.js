const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VENDOR_LIBS = [
    'axios',
    'bootstrap',
    'jquery',
    'react',
    'react-dom',
    'react-redux',
    'react-router-dom',
    'redux',
    'redux-thunk',
    'redux-saga'
];
module.exports = {
    mode: 'development',
    entry: {
        app: ['./src/index.js'],
        vendor: VENDOR_LIBS
    },

    output: {
        path: __dirname + "./src/dist",
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader']
            },
            {
                use: [
                    'style-loader',
                    'css-loader'
                ],
                test: /\.css$/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
            {
                test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg|png|gif)(\?.*$|$)/,
                use: ['url-loader?limit=100000']
            },
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery',
            'window.$': 'jquery',
            'window.jQuery': 'jquery'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names : ['vendor', 'manifest']
        }),
        new HtmlWebpackPlugin({
            template : './public/index.html'
        })
    ],
    devServer: {
        contentBase: __dirname,
        port: 1999,
        host: 'localhost',
    },

};