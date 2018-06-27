const gulp = require('gulp');
      babel = require('gulp-babel'),
      plumber = require('gulp-plumber'),
      config = require('../config');
 
gulp.task('babel', () =>
    gulp.src(`${config.paths.src}/js/**/*.js`)
        .pipe(plumber())
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest(`${config.paths.build}/js`))
);

gulp.task('babel:watch', () => {
  gulp.watch(`${config.paths.src}/js/**/*.js`, ['babel'])
})