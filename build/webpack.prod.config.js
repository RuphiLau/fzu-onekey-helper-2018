const baseConfig = require('./webpack.base.config.js')
const merge = require('webpack-merge')
const { resolve } = require('path')

const prodConfig = {
    entry: resolve(__dirname, '../src/frontend/pages/index.tsx'),
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'app.bundle.[hash].js'
    }
}

module.exports = merge(baseConfig, prodConfig)