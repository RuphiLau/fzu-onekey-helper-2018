/**
 * Webpack打包基础配置
 * @authr: RuphiLau
 */

const webpack = require('webpack')
const { resolve, join } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    resolve: {
        alias: {
            root: resolve(__dirname, '../src/frontend'),
            components: resolve(__dirname, '../src/frontend/components')
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    module: {
        rules: [
            { test: /\.tsx?$/, use: 'awesome-typescript-loader' },
            { test: /\.js$/, use: 'source-map-loader', enforce: 'pre' }
        ]
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new HtmlWebpackPlugin({
            template: resolve(__dirname, '../src/template/index.html')
        })
    ]
};