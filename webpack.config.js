const webpackDevConfig = require('./build/webpack.dev.config')
const webpackProdConfig = require('./build/webpack.prod.config')

const isProduction = process.env.NODE_ENV === 'production'

module.exports = isProduction ? webpackProdConfig : webpackDevConfig