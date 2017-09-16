var gulp = require('gulp');
var browserSync = require('browser-sync');
var fs = require('fs');
var runSequence = require('run-sequence');
var reload = browserSync.reload;

gulp.task('serve', ['watch'], function () {
  if(fs.existsSync(gulp.paths.tempDir)) {
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
  } else {
    console.error('no .tmp dir found! run build first!');
  }
});

gulp.task('serve-dist', function () {
  if(fs.existsSync(gulp.paths.distDir)) {
    browserSync({
      notify: false,
      port: 8080,
      server: {
        baseDir: [gulp.paths.distDir]
      }
    });

    gulp.watch([
      gulp.paths.distDir + '/**'
    ]).on('change', reload);
  } else {
    console.error('no /dist dir found! run build first!');
  }
});
