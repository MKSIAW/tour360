const path = require('path');

module.exports = {
  entry: './src/index.js',  // Adjust the entry point based on your project structure
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            test: /\.html$/,
            use: ['html-loader'],
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      // Add other rules for different file types, such as HTML, CSS, etc.
    ],
  },
};
