const path = require('path')

const _ = require('lodash')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const dir = _.partial(path.resolve, __dirname)

module.exports = {
	entry: dir('index.js'),
	output: {
		filename: 'bundle.js',
		path: dir('dist')
	},
	devtool: 'cheap-source-map',
	devServer: {
		contentBase: dir('dist'),
		compress: true,
		port: 9000,
		hot: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.vue$/,
				use: {
					loader: 'vue-loader',
					options: {
						postcss: [require('postcss-cssnext')()]
					}
				}
			},
			{
				test: /\.json$/,
				use: 'json-loader'
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
