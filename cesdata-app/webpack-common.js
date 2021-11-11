// shared config (dev and prod)
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const CopyPlugin = require("copy-webpack-plugin")
const path = require('path')

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      { test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      {
        test: /\.(tsx|ts)$/,
        use: ['babel-loader', 'ts-loader']
      },
      {
        test: /\.js$/,
        use: ['babel-loader', 'source-map-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', { loader: 'css-loader', options: { importLoaders: 1 } }]
      },
      {
        test: /\.(scss|sass)$/,
        loaders: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'sass-loader'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]',
          'image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false'
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        include: [path.join(__dirname, '..', 'node_modules/@cesce')],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            },
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      templateContent: ({htmlWebpackPlugin}) => `<!DOCTYPE html>
        <html lang="en">
          <head> 
            <meta name="author" content="Atmira Team">  
            <title>CESDATA App</title>
            <style>
            body{
              display:flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              margin: 0;
              padding: 0;
            }
            h1 { 
              font-family: 'Enriqueta', arial, serif; 
              line-height: 1.25; 
              margin: 3rem; 
              font-size: 40px; 
              font-weight: bold; 
            }
            #root{
              width: 100%;
            }
            </style>
            ${htmlWebpackPlugin.tags.headTags}
          </head>
          <body>
              ${htmlWebpackPlugin.tags.bodyTags}
          </body>
        </html>
      `
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled', // server || static || json || disabled
      openAnalyzer: true
    }),
    new CopyPlugin(
      [
        {
          from: './node_modules/@cesce/ui-catalogue/lib/fonts',
          to: 'fonts',
        }
      ]
    ),
  ],
  performance: {
    hints: false
  }
}
