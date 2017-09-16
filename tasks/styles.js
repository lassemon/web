var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

gulp.task('styles', function(cb) {
  return gulp.src('./src/css/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('bundle.css'))
    .pipe(gulp.dest(gulp.paths.tempDir));

cb();
});
