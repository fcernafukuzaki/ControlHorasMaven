const path = require('path');

module.exports = {
  //entry: './src/main/resources/static/entries/home.js',
  entry: './src/main/resources/static/entries/periodoFacturacion.js',
  devtool: 'sourcemaps',
  cache: true,
  debug: true,
  output: {
    path: __dirname,
    //filename: './src/main/resources/static/home.js'
    filename: './src/main/resources/static/periodoFacturacion.js'
  },
  module: {
    loaders: [
      {
        test: path.join(__dirname, '.'),
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};