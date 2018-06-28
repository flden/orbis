const gulp = require('gulp'),
      browserSync = require('browser-sync').create(),
      config = require('../config');

gulp.task('server', () => {
  browserSync.init({
    server: config.paths.build
  });

  gulp.watch([
    `${config.paths.src}/templates/**/*.pug`,
    `${config.paths.src}/css/**/*.css`,
    `${config.paths.src}/less/**/*.less`,
    `${config.paths.src}/js/**/*.js`
  ]).on('change', browserSync.reload);
})