const path = require('path')

const R = require('ramda')
const webpack = require('webpack')

const dir = R.partial(path.resolve, [__dirname])

module.exports = {
  mode: 'development',
  entry: [
    //
    // 'react-hot-loader/patch',
    'babel-polyfill',
    dir('index.js'),
  ],
  output: {
    filename: 'bundle.js',
    path: dir('../../../static/lost-text-mining'),
    publicPath: 'http://localhost:9001/',
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
    extensions: ['.js', '.jsx', '.json'],
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
              // localIdentName: '[path][name]__[local]--[hash:base64:5]'
              localIdentName: '[name]__[local]',
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [require('postcss-cssnext')],
            },
          },
        ],
      },
      {
        test: /\.(png)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
    ],
  },
  optimization: {
    namedModules: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
}
