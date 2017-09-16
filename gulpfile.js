var gulp = require('gulp');

var sourceRoot = './src';

gulp.paths = {
  tempDir : './.tmp',
  packageDir : './dist',
  jsApp : sourceRoot + '/js/app.js',
  cssRoot : sourceRoot + '/css/main.scss',
  htmlRoot : sourceRoot + '/index.html',
  js : {
    es6: './src/js/es6'
  },
  images : {
    favicon : './favicon.ico'
  },
  lib : {
    js : sourceRoot + '/js/lib/*',
    css : sourceRoot + '/css/lib.scss',
    fonts : sourceRoot + '/fonts/*'
  }
};

var requireDir = require('require-dir');
var dir = requireDir('./tasks');
