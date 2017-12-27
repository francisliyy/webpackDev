const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
  	app:'./src/index.js',
  	print:'./src/print.js'
  },
  plugins: [
  	 new CleanWebpackPlugin(['dist']),
     new HtmlWebpackPlugin({
       title: 'Output Management'
     })
   ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
	  rules: [
	    {
	      test: /\.css$/,
	      use: [
	        'style-loader',
	        'css-loader'
	      ]
	    },
	    {
	        test: /\.(jpe?g|png|gif|svg)$/i,
	        loaders: [
	            'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
	            'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
	        ]
	    }
	  ]
    }
};