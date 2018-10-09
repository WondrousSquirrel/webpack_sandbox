const path = require('path');

// Плагины
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    // entry: './src/index.js',
    entry: {
        /* для hot module replacement нам не нужны эти строки
        app: './src/index.js',
        print: './src/print.js'
        */
       app: './src/index.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        /**
         * webpack-dev-server не пишет никаких файлов после компиляции,
         * он сохраняет все изменения в памяти и "обслуживает" их
         * как будто они реальны. Если страница ожидает найти путь к сборке в другом месте,
         * то изменить можно с помощью publicPath опции
         */
        contentBase: './dist',
        hot: true
    },
    plugins: [
        // оставляет только с генерированные файлы в директории /dist
        new CleanWebpackPlugin(['dist']),
        // данный плагин создает index.html и замещает уже существующий
        new HtmlWebpackPlugin({
            title: 'Hello Webpack!!',
            template: './src/template.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            }
        ]
    }
};