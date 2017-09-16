var gulp = require('gulp');
var watch = require('gulp-watch');
var batch = require('gulp-batch');
var runSequence = require('run-sequence');

gulp.task('watch', ['js', 'styles', 'html'], function () {
  watch('./src/**/*.html', batch(function (events, done) {
    console.log('html changed');
    runSequence('html', done);
  }));

  watch('./src/**/*css', batch(function (events, done) {
    console.log('css changed');
    runSequence('styles', done);
  }));

  watch('./src/**/*.js', batch(function (events, done) {
    console.log('js changed');
    runSequence('js', done);
  }));
});
