const gulp = require('gulp');
const browserSync = require('browser-sync');
const fs = require('fs');
const runSequence = require('run-sequence');
const reload = browserSync.reload;

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
