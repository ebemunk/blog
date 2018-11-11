const path = require('path')

const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const PostcssPresetEnv = require('postcss-preset-env')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  mode: isProd ? 'production' : 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'http://localhost:9001/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      roots: path.resolve(__dirname, 'src/roots/'),
      data: path.resolve(__dirname, 'src/data/'),
      vizlib: path.resolve(__dirname, '../vizlib/dist'),
    },
  },
  devtool: 'source-map',
  devServer: {
    port: 9001,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules|vizlib/,
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
              plugins: [
                PostcssPresetEnv({
                  stage: 0,
                  features: {
                    'color-mod-function': {
                      unresolved: 'warn',
                    },
                  },
                }),
              ],
            },
          },
        ],
      },
      {
        test: /\.csv$/,
        use: [{ loader: 'dsv-loader', options: { delimiter: ',' } }],
      },
    ],
  },
}
