const path = require('path')

const R = require('ramda')
const webpack = require('webpack')
const cssNext = require('postcss-cssnext')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const dir = R.partial(path.resolve, [__dirname])

module.exports = {
  mode: 'development',
  entry: [
    //
    'react-hot-loader/patch',
    'babel-polyfill',
    dir('index.js'),
  ],
  output: {
    filename: 'bundle.js',
    path: dir('../../../static/van-eventviz'),
    // publicPath: 'http://localhost:9001/',
  },
  devtool: 'source-map',
  devServer: {
    port: 9001,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[name]__[local]',
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [cssNext],
            },
          },
        ],
      },
      {
        test: /\.json$/,
        use: 'json-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
      {
        test: /\.svg$/,
        use: 'react-svg-loader',
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: dir('index.html'),
    }),
  ],
}
