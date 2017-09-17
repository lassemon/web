const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('build', ['clean'], function (cb) {
  runSequence(['js', 'styles', 'html', '3rdparty'], cb);
});
