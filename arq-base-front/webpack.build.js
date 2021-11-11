const path = require('path')
const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const Dotenv = require('dotenv-webpack')
const libraryName = require('./package.json').name
const outputFile = 'index.js'
const env = process.env.ENV || 'PRO'

console.log(`Construyendo para entorno ${env}`) // eslint-disable-line

module.exports = {
  entry: './src/facade/index.ts',
  output: {
    path: path.join(__dirname, '/lib'),
    filename: outputFile,
    chunkFilename: '[name].shared.lib.js',
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  mode: env === 'DEV' ? 'development' : 'production',
  node: {
    fs: 'empty'
  },
  devtool: env === 'DEV' ? 'eval-source-map' : 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin({}),
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled', // server || static || json || disabled
      openAnalyzer: true
    }),
    new Dotenv({
      path: path.resolve(__dirname, '.env.prod')
    })
  ]
}
