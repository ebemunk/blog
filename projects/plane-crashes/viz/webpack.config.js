const path = require('path')

const webpack = require('webpack')
const PostcssPresetEnv = require('postcss-preset-env')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  mode: isProd ? 'production' : 'development',
  entry: { main: './src/index.js', static: './src/static.js' },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../../../static/plane-crashes'),
    publicPath: 'http://localhost:9001/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {},
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
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[name]__[local]-[hash:base64:2]',
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
