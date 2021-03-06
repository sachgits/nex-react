
var webpack = require('webpack');

module.exports = function (config) {
  config.set({
    browsers: [ 'Chrome' ], //run in Chrome
    singleRun: true, //just run once by default
    frameworks: [ 'mocha' ], //use the mocha test framework
    files: [
      'tests.webpack.js', //just load this file
       'https://code.jquery.com/jquery-1.11.2.min.js'
      
    ],
    exclude: [
      'js/node_modules/*'
    ],
    preprocessors: {
      'tests.webpack.js': [ 'webpack', 'sourcemap' ], //preprocess with webpack and our sourcemap loader
    },
    reporters: [ 'dots' ], //report results in this format
    webpack: { //kind of a copy of your webpack config
      devtool: 'inline-source-map', //just do inline source maps instead of the default
      module : {
      loaders : [
        {
          test : /\.js$/,        
          exclude : /node_modules/,
          loader : 'babel',
          query:{
            presets: ['es2015','react']
          }
        }
      ]
      }
    },
    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    }
  });
};
