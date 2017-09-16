var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');

gulp.task('html', function (cb) {
	gulp.src(gulp.paths.htmlRoot)
  	.pipe(gulp.dest(gulp.paths.tempDir));

  cb();
});

gulp.task('html-dist', function (cb) {
	gulp.src(gulp.paths.htmlRoot)
		.pipe(htmlmin({collapseWhitespace: true}))
  	.pipe(gulp.dest(gulp.paths.distDir));

  cb();
});
