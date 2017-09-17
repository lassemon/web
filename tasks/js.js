const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('js', function (cb) {
  runSequence('lint', 'browserify', cb);
});

gulp.task('js-dist', function (cb) {
  runSequence('lint', 'browserify-dist', cb);
});
