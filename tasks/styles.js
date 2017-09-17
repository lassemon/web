const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
let cleanCSS = require('gulp-clean-css');

gulp.task('styles', function(cb) {
  return gulp.src(gulp.paths.cssRoot)
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('bundle.css'))
    .pipe(gulp.dest(gulp.paths.tempDir));

  cb();
});

gulp.task('styles-dist', function(cb) {
  return gulp.src(gulp.paths.cssRoot)
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(rename('bundle.css'))
    .pipe(gulp.dest(gulp.paths.distDir));

  cb();
});
