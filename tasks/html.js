var gulp = require('gulp');

gulp.task('html', function (cb) {
	gulp.src(gulp.paths.htmlRoot)
  	.pipe(gulp.dest(gulp.paths.tempDir));
  cb();
});
