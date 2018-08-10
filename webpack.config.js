const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
			{
        test: /\.css$/,
        use: ['style-loader','css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/assets',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({'React': 'react'}),
  ],
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 3001,
    historyApiFallback: true,
  }

  
};
