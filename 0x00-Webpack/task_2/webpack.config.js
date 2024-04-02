const path = require('path');

module.exports = {
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(png|jpg)$/,
				loader: 'url-loader'
			},
		],
	},
	entry: './js/dashboard_main.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public'),
	},
};
