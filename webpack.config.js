const path = require('path');
require('dotenv').config({ path: 'env'});

module.exports = () => {
    return {
      entry: ['babel-polyfill','./src/app.js'],
      output: {
        path: path.join(__dirname, 'public', 'dist'),
        filename: 'bundle.js'
      },
      module: {
        rules: [{
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/
        }, {
            rules: [
              {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  'style-loader',
                  // Translates CSS into CommonJS
                  'css-loader',
                  // Compiles Sass to CSS
                  'sass-loader',
                ],
              },
            ],
          }]
      },
      devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
        publicPath: '/dist/'
      }
    };
  }
  