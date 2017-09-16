var gulp = require('gulp');
var eslint = require('gulp-eslint');

gulp.task('lint', function (cb) {
  gulp.src(['./src/**/*.js', '!./src/es6/**', '!'+gulp.paths.lib.js+'**', '!node_modules/**'])
      .pipe(eslint({
      	'env': {
      		'es6': true
      	}
      }))
      .pipe(eslint.format())
      .pipe(eslint.failAfterError());

  cb();
});
