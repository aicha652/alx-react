const path = require('path');

module.exports = {
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				use: [
				  'file-loader',
				  {
					loader: 'image-webpack-loader',
					options: {
					  bypassOnDebug: true, // webpack@1.x
					  disable: true, // webpack@2.x and newer
					},
				  },
				],
			  },
		],
	},
	entry: './js/dashboard_main.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public'),
	},
};
