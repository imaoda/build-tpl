const merge = require('webpack-merge')
const path = require('path')
const baseConfig = require('./webpack.base')

module.exports = merge.smart({}, baseConfig, {
  entry: path.resolve(process.cwd(), 'src/index'),
})
