/**
 * webpack.config.js
 **/

const webpack = require('webpack');
const path = require('path');
const pkg = require('./package.json');
const config = {};
const HtmlWebpackPlugin = require('html-webpack-plugin');

config.name = pkg.name;
config.source = path.resolve(__dirname, 'src');
config.paths = {
    app: path.resolve(__dirname, 'docs'),
    public: '/',
    content: './docs/',
    assets: './assets/',
    scripts: './assets/scripts/',
    styles: './assets/styles/',
    images: './assets/images/',
    fonts: './assets/fonts/'
};

config.relativePaths = {
    fonts: '../fonts/',
    images: '../images/'
};

config.filenames = {
    js: config.paths.scripts + config.name + '.[name]',
    lib: config.paths.scripts + config.name + '.lib.js',
    css: config.paths.styles + config.name + '.css'
};

config.libs = [];

Object.keys(pkg.dependencies).forEach(function (item) {
    config.libs.push(item);
});

const devConfig = {
    context: config.source,
    entry: {
        'js': [
            './scripts/index.js'
        ],
        'lib': config.libs
    },
    output: {
        filename: config.filenames.js,
        path: config.paths.app,
        publicPath: config.paths.public
    },
    module: {
        rules: [
            {
                test: /\.tpl?$/i,
                loader: 'html-loader',
                options: {
                    attrs: ["img:src", "link:href"]
                }
            },
            {
                test: /\.(js|jsx)?$/i,
                enforce: 'pre',
                loader: 'eslint-loader'
            },
            {
                test: /\.(js|jsx)?$/i,
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        modules: [
            'node_modules',
            config.source
        ],
        extensions: ['.js', '.jsx', '.json']
    },
    devtool: 'cheap-module-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: config.source + '/templates/static/index.tpl'
        }),
        new webpack.DefinePlugin({
            '__DEV__': false,
            '__STG__': false,
            '__PROD__': true,
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            include: /\.js$/,
            minimize: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'lib',
            filename: config.filenames.lib,
            minChunks: Infinity
        }),
        new webpack.NamedModulesPlugin()
    ]
};

module.exports = devConfig;