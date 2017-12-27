const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
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