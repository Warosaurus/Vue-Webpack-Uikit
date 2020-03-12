const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
// const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {

    mode: 'development',

    entry: {
        'index': './pages/index.js',
    },

    devtool: 'source-map',

    devServer: {
        contentBase: path.resolve(__dirname, 'dist/')
    },

    output: {
        filename: './[name].min.js',
        path: path.resolve(__dirname, 'dist'),
    },

    module: {
        rules: [
            { test: /\.vue$/, use: 'vue-loader' },
            { test: /\.min.css$/, loader: 'file-loader' },
            { test: /\.css$/, loader: 'css-loader' },
            {
                test: /\.less$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: 'css-loader' },
                    { loader: 'less-loader' },
                ]
            },
            { test: /\.html$/, loader: 'html-loader' },
        ]
    },

    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title: 'Index',
            template: path.resolve(__dirname, 'layout', 'layout.html'),
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
    ]
};
