const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, './'),
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, './public/build'),
        filename: 'index_bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            { test: /\.(ts|tsx)$/, use: 'ts-loader', exclude: /node_modules/ },
            { test: /\.(js)$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.css$/, use: ['style-loader', {
                loader: 'css-loader',
                options: {
                    modules: true
                }
            }]}
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './public/index.html'
        })
    ],
    devServer: {
        port: 7000
    },
    devtool: 'source-map'
};