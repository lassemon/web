const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('default', function(cb) {
  runSequence('clean', 'build', cb);
});
