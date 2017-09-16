var gulp = require('gulp');
var browserSync = require('browser-sync');
var fs = require('fs');
var runSequence = require('run-sequence');
var reload = browserSync.reload;

gulp.task('serve', ['build', 'watch'], function () {
  browserSync({
    notify: false,
    port: 8080,
    server: {
      baseDir: [gulp.paths.tempDir]
    }

  });

  gulp.watch([
    gulp.paths.tempDir + '/**'
  ]).on('change', reload);
});
