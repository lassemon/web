const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const fileinclude = require('gulp-file-include');

gulp.task('html', function (cb) {
	gulp.src(gulp.paths.htmlRoot)
		.pipe(fileinclude({
			prefix: '@@',
			basepath: '@file'
		}))
  	.pipe(gulp.dest(gulp.paths.tempDir));

  cb();
});

gulp.task('html-dist', function (cb) {
	gulp.src(gulp.paths.htmlRoot)
		.pipe(fileinclude({
			prefix: '@@',
			basepath: '@file'
		}))
		.pipe(htmlmin({collapseWhitespace: true}))
  	.pipe(gulp.dest(gulp.paths.distDir));

  cb();
});
