const gulp = require('gulp');
const watch = require('gulp-watch');
const batch = require('gulp-batch');
const runSequence = require('run-sequence');

gulp.task('watch', ['js', 'styles', 'html'], function () {
  watch('./src/**/*.html', batch(function (events, done) {
    runSequence('html', done);
  }));

  watch('./src/**/*css', batch(function (events, done) {
    runSequence('styles', done);
  }));

  watch('./src/**/*.js', batch(function (events, done) {
    runSequence('js', done);
  }));
});
