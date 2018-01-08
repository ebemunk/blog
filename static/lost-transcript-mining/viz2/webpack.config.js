const path = require('path')

const R = require('ramda')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const dir = R.partial(path.resolve, [__dirname])

module.exports = {
	entry: [
		'react-hot-loader/patch',
		'babel-polyfill',
		dir('index.js'),
	],
	output: {
		filename: 'bundle.js',
		path: dir('dist')
	},
	devtool: 'source-map',
	devServer: {
		contentBase: dir('dist'),
		compress: true,
		port: 9001,
		hot: true
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: 'babel-loader',
				exclude: /node_modules/
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
							localIdentName: '[name]__[local]'
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							ident: 'postcss',
							plugins: [
								require('postcss-cssnext')
							]
						}
					}
				]
			},
			{
				test: /\.json$/,
				use: 'json-loader',
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: dir('index.html')
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin()
	]
}
