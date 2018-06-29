const gulp = require('gulp'),
      pug = require('gulp-pug'),
      plumber = require('gulp-plumber'),
      config = require('../config');

gulp.task('pug', function buildHTML() {
  return gulp.src([
    `${config.paths.src}/templates/*.pug`
  ])
  .pipe(plumber())
  .pipe(pug({
    // pretty: true
  }))
  .pipe(
    gulp.dest(`${config.paths.build}`)
  )
});

gulp.task('pug:watch', () => {
  gulp.watch([
  `${config.paths.src}/templates/**/*.pug`,
  `${config.paths.src}/blocks/**/*.pug`
  ], ['pug'])
})
