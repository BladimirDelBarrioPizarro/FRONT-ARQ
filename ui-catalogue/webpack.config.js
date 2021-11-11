const path = require('path')
const webpack = require('webpack')

const libraryName = require('./package.json').name
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const outputFile = 'index.js'
const env = process.env.ENV || 'PRO'
const configBabel = require('./.babel.config.js')

module.exports = {
  entry: './src/main.ts',
  output: {
    path: path.join(__dirname, '/lib'),
    filename: outputFile,
    chunkFilename: '[name].shared.lib.js',
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  mode: env === 'PRO' ? 'production' : 'development',
  node: {
    fs: 'empty'
  },
  devtool: env === 'PRO' ? 'source-map' : 'inline-source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: configBabel
          },
          // {
          //   loader: 'ts-loader',
          //   options: {
          //     configFile: path.join(__dirname, '/tsconfig-lib.json')
          //   }
          // }
        ]
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            },
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
      umd: 'react'
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
      umd: 'react-dom'
    },
    'react-router-dom': {
      root: 'ReactRouterDom',
      commonjs2: 'react-router-dom',
      commonjs: 'react-router-dom',
      amd: 'react-router-dom'
    },
  },
  plugins: [
    new webpack.EnvironmentPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled', // server || static || json || disabled
      openAnalyzer: true
    })
  ]
}
