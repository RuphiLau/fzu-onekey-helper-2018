const baseConfig = require('./webpack.base.config.js')
const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const { resolve } = require('path')

const devConfig =  {
    output: {
        path: resolve(__dirname, '../dist'),
        filename: 'app.bundle.js'
    },
    plugins: [
        new CleanWebpackPlugin([resolve(__dirname, '../dist')])
    ],
    devtool: 'source-map',
    watch: true
}

module.exports = merge(baseConfig, devConfig)