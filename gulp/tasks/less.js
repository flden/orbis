const gulp = require('gulp'),
      less = require('gulp-less'),
      path = require('path'),
      plumber = require('gulp-plumber'),
      config = require('../config');

gulp.task('less', () => {
  return gulp.src([
    `${config.paths.src}/less/**/*.less`,
    `${config.paths.src}/blocks/**/*.less`,
  ])
    .pipe(plumber())
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest(`${config.paths.build}/css`));
});

gulp.task('less:watch', () => {
  gulp.watch([
    `${config.paths.src}/less/**/*.less`,
    `${config.paths.src}/blocks/**/*.less`,
   ], ['less'])
})
