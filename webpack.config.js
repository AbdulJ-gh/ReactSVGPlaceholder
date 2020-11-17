const path = require('path');

module.exports = {
	mode: 'production',
	entry: './src/PlaceholderRect.jsx',
	output: {
		path: path.resolve('lib'),
		filename: 'PlaceholderRect.js',
		libraryTarget: 'commonjs2',
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env', '@babel/preset-react']
				},
			},
		],
	},
	resolve: {
		alias: {
			'react': path.resolve(__dirname, './node_modules/react'),
			'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
		}
	},
	externals: {
		// Don't bundle react or react-dom
		react: {
			commonjs: "react",
			commonjs2: "react",
			amd: "React",
			root: "React"
		},
		"react-dom": {
			commonjs: "react-dom",
			commonjs2: "react-dom",
			amd: "ReactDOM",
			root: "ReactDOM"
		}
	}
}