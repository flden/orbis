const gulp = require('gulp'),
      config = require('../config');

gulp.task('libs', () => {
  gulp.src([
    ''
  ])
  .pipe(

    gulp.dest(`${config.paths.build}/css`)
  )
});