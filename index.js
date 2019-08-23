const webpack = require('webpack')
const merge = require('webpack-merge')
const devConfig = require('./configs/webpack.dev.js')
const prodConfig = require('./configs/webpack.prod.js')

module.exports = function start(options, webpackCustom = {}) {
  const { env } = options
  if (env === 'development') webpack(merge({}, devConfig, webpackCustom)).run()
  else webpack(merge({}, prodConfig, webpackCustom)).run()
}
