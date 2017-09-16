var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('dist', function (cb) {
  runSequence(['js-dist', 'styles-dist', 'html-dist', '3rdparty-dist'], cb);
});
