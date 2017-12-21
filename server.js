/**
 * 调试服务器
 * @author: RuphiLau
 */

const Koa = require('koa')
const opn = require('opn')
const config = require('config')
const { resolve } = require('path')

const app = new Koa()

// 配置项
const isProduction = process.env.NODE_ENV === 'production'
const port = config.get('port')
const url = `http://127.0.0.1:${port}`

if (!isProduction) {
    let opened = false
    const webpack = require('webpack')
    const webpackConfig = require('./webpack.config')
    const compiler = webpack(webpackConfig)

    compiler.plugin('done', () => {
        if (!opened) {
            opn(url)
            opened = true
        }
    })

    app.use(require('koa-webpack-dev-middleware')(compiler, {
        noInfo: true
    }))
}

app.listen(port)