// Creating file bundle

const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'), // Entry file
  output: {
    path: path.resolve(__dirname, 'public'), // Bundle destination
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      // Loaders to transpile
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },

      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' }, // Send css to html style tag
          { loader: 'css-loader' }, // Allows load image files
        ],
      },

      {
        test: /\.(gif|png|jpe?g)$/i,
        use: [{ loader: 'file-loader' }],
      },
    ],
  },
};
