const gulp = require('gulp');
const eslint = require('gulp-eslint');

gulp.task('lint', function (cb) {
  gulp.src(['./src/**/*.js', '!'+gulp.paths.js.es6+'/**', '!'+gulp.paths.lib.js+'**', '!node_modules/**'])
      .pipe(eslint({
      	'env': {
      		'es6': true
      	}
      }))
      .pipe(eslint.format())

  cb();
});
