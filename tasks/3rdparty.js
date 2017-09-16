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

	// images
	gulp.src(gulp.paths.images.favicon)
		.pipe(gulp.dest(gulp.paths.tempDir));

	cb();
});

gulp.task('3rdparty-dist', function (cb) {

  // javascript libraries
	gulp.src(gulp.paths.lib.js)
  	.pipe(gulp.dest(gulp.paths.distDir + '/lib'));

  // css libraries
  gulp.src(gulp.paths.lib.css)
		.pipe(sass().on('error', sass.logError))
		.pipe(rename('lib.css'))
		.pipe(gulp.dest(gulp.paths.distDir));

  // fonts
  gulp.src(gulp.paths.lib.fonts)
  	.pipe(gulp.dest(gulp.paths.distDir + '/fonts'));

	// images
	gulp.src(gulp.paths.images.favicon)
		.pipe(gulp.dest(gulp.paths.distDir));

	cb();
});
