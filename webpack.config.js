var path = require('path');
module.exports = {
  entry: './index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { 
        test: path.join(__dirname+'/src/build', 'es6'),
        loader: 'babel-loader',
        query: {
          "presets": ["es2015"]
        }
      }
    ]
  }
};