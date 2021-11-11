const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const Dotenv = require('dotenv-webpack')

module.exports = {
  entry: './demo/index.ts',
  output: {
    filename: '[name].js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'demo')
    // https: true
  },
  mode: 'development',
  node: {
    fs: 'empty'
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './demo/template/index.html'
    }),
    new webpack.EnvironmentPlugin({}),
    new Dotenv({
      path: path.resolve(__dirname, '.env.local')
    })
  ]
}
