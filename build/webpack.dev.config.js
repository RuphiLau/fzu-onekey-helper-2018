const baseConfig = require('./webpack.base.config.js')
const webpack = require('webpack')
const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const { resolve } = require('path')

const devConfig =  {
    entry: {
        index: ['./client.js'].concat(resolve(__dirname, '../src/frontend/pages/index.tsx'))
    },
    output: {
        path: resolve(__dirname, '../dist'),
        filename: '[name].bundle.js'
    },
    plugins: [
        new CleanWebpackPlugin([resolve(__dirname, '../dist')]),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    devtool: 'source-map',
    watch: true
}

module.exports = merge(baseConfig, devConfig)