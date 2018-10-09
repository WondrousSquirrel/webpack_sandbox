const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config');
const compiler = webpack(config);

/**
 * Сообщаем express`у использовать webpack-dev-middleware
 * и webpack.config.js файл, как основной.
 */

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}));

// HTM
app.use(require('webpack-hot-middleware')(compiler));

app.listen(3000, () => {
    console.log('Example app listening on port 3000!\n');
});