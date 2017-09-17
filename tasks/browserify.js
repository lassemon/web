const gulp = require('gulp');
const gutil = require('gulp-util');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const extend = require('util')._extend
const brfs = require('brfs');

const browserify = require('browserify');
const watchify = require('watchify');

gulp.task('browserify', function(){
  developmentBundle();
});

gulp.task('browserify-dist', function(){
  productionBundle();
});

function developmentBundle(){
  const bundler = browserify({
    entries: [gulp.paths.jsApp],
    transform: brfs
  });
  buildDevelopmentBundle(bundler);
}

function productionBundle(){
  const bundler = browserify({
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
