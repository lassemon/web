var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var extend = require('util')._extend
var brfs = require('brfs');

var browserify = require('browserify');
var watchify = require('watchify');

gulp.task('browserify', function(){
  developmentBundle();
});

gulp.task('browserify-dist', function(){
  productionBundle();
});

function developmentBundle(){
  var bundler = browserify({
    entries: [gulp.paths.jsApp],
    transform: brfs
  });
  buildDevelopmentBundle(bundler);
}

function productionBundle(){
  var bundler = browserify({
    entries: [gulp.paths.jsApp],
    transform: brfs
  });
  buildProductionBundle(bundler);
}

function buildDevelopmentBundle(bundler){
  bundler
    .bundle()
      .pipe(source('bundle.js'))
      .pipe(buffer())
      .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
      .pipe(gulp.dest(gulp.paths.tempDir))
}

function buildProductionBundle(bundler){
  bundler
    .bundle()
      .pipe(source('bundle.js'))
      .pipe(buffer())
      .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
      .pipe(gulp.dest(gulp.paths.distDir))
}
