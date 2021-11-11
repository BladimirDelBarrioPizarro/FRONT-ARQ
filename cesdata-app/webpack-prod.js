// production config
const { merge } = require('webpack-merge')
const { resolve } = require('path')

const commonConfig = require('./webpack-common')
const Dotenv = require('dotenv-webpack')

module.exports = merge(commonConfig, {
  mode: 'production',
  entry: './src/index.tsx',
  output: {
    filename: 'js/bundle.[hash].min.js',
    path: resolve(__dirname, './build'),
    publicPath: '/'
  },
  devtool: 'source-map',
  plugins: [new Dotenv({
    path: resolve(__dirname, '.env.prod')
  }),
  ]
})
