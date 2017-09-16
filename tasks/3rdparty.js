var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

gulp.task('3rdparty', function (cb) {

  // javascript libraries
	gulp.src(gulp.paths.lib.js)
  	.pipe(gulp.dest(gulp.paths.tempDir + '/lib'));

  // css libraries
  gulp.src(gulp.paths.lib.css)
		.pipe(sass().on('error', sass.logError))
		.pipe(rename('lib.css'))
		.pipe(gulp.dest(gulp.paths.tempDir));

  // fonts
  gulp.src(gulp.paths.lib.fonts)
  	.pipe(gulp.dest(gulp.paths.tempDir + '/fonts'));

	cb();
});
