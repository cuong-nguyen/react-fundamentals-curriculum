const path = require('path');
const webpack = require('webpack');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

let config = {
	context: __dirname,
	entry: './app/index.js',
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, 'dist'),
		publicPath: '/'
	},
	devServer: {
		historyApiFallback: true
	},
	module: {
		rules: [
			{
				include: path.join(__dirname, 'app'),
				test: /\.js$/,
				use: 'babel-loader'
			},
			{
				include: path.join(__dirname, 'app'),
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							url: false
						}
					}
				]
			}
			// {
			// 	include: path.join(__dirname, 'app'),
			// 	test: /\.svg$/,
			// 	use: 'file-loader?name=assets/[path][name].[ext]'
			// }
		]
	},
	plugins: [
		new ProgressBarPlugin(),
		new HtmlPlugin({
			template: 'app/index.html'
		}),
		new CopyPlugin([
			{ from: './app/images/weather-icons', to: './images/weather-icons' },
			{ from: './app/images/*.svg', to: './images/[name].[ext]' }
		])
	]
};

module.exports = config;