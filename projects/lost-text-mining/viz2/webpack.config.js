const path = require('path')

const R = require('ramda')
const webpack = require('webpack')

const CleanWebpackPlugin = require('clean-webpack-plugin')

const dir = R.partial(path.resolve, [__dirname])

module.exports = {
  // mode: 'development',
  mode: 'production',
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
    globalObject: 'this',
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
    alias: {
      sections: path.resolve(__dirname, 'src/sections/'),
      components: path.resolve(__dirname, 'src/components/'),
      store: path.resolve(__dirname, 'src/store/'),
      hoc: path.resolve(__dirname, 'src/hoc/'),
      viz: path.resolve(__dirname, 'src/viz/'),
      data: path.resolve(__dirname, 'src/data/'),
      utils: path.resolve(__dirname, 'src/utils/'),
    },
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
              localIdentName: '[name]__[local]-[hash:base64:5]',
              context: __dirname,
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
      {
        test: /\.worker\.js$/,
        use: [
          'babel-loader',
          { loader: 'worker-loader', options: { inline: true } },
        ],
      },
    ],
  },
  optimization: {
    namedModules: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(dir('../../../static/lost-text-mining'), {
      allowExternal: true,
    }),
  ],
}
