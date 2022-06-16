const path = require('path')

const webpack = require('webpack')
const PostcssPresetEnv = require('postcss-preset-env')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  mode: isProd ? 'production' : 'development',
  entry: ['./src/ssr.tsx'],
  output: {
    filename: 'ssr.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      'react-hot-loader': path.resolve(
        path.join(__dirname, './node_modules/react-hot-loader'),
      ),
    },
  },
  target: 'node',
  plugins: [new webpack.NamedModulesPlugin()],
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        use: ['swc-loader'],
        exclude: /node_modules\/(?!(vizlib)\/).*/,
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
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
      {
        test: /\.webp$/i,
        loaders: ['url-loader', 'webp-loader'],
      },
    ],
  },
}
