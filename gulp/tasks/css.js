const gulp = require('gulp'),
      postcss = require('gulp-postcss'),
      postcssPresetEnv = require('postcss-preset-env'),
      config = require('../config');

gulp.task('css', () => {
  gulp.src(`${config.paths.build}/css/**/*.css`)
  .pipe(
    postcss([
      postcssPresetEnv(/* options */)
    ])
  ).pipe(
    gulp.dest(`${config.paths.build}/css`)
  )
});

gulp.task('css:watch', () => {
  gulp.watch(`${config.paths.src}/css/**/*.css`, ['css'])
})