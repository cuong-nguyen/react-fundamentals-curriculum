const path = require('path');
const webpack = require('webpack');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

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
				use: ['style-loader', 'css-loader']
			},
			{
				include: path.join(__dirname, 'app'),
				test: /\.svg$/,
				use: 'file-loader'
			}
		]
	},
	plugins: [
		new ProgressBarPlugin(),
		new HtmlPlugin({
			template: 'app/index.html'
		})
	]
};

module.exports = config;