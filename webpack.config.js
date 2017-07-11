const path = require('path');
const webpack = require('webpack');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

let config = {
	context: __dirname,
	entry: './app/index.js',
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, 'dist')
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
			{ test: /\.css$/, use: ['style-loader', 'css-loader'] }
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