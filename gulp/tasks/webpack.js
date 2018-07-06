const gulp = require('gulp'),
      rename = require('gulp-rename'),
      uglify = require('gulp-uglify'),
      webpack = require('webpack'),
      webpackStream = require('webpack-stream')
      config = require('../config');

gulp.task('webpack', function () {
  return gulp.src(`${config.paths.src}/js/main.js`)
    .pipe(webpackStream({
      output: {
        filename: 'app.js',
      },
      module: {
        rules: [
          {
            test: /\.(js)$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
              presets: ['env']
            }
          }
        ]
      },

    }))
    .pipe(gulp.dest('./build/js/'))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./build/js/'));
});

gulp.task('webpack:watch', () => {
  gulp.watch([
    `${config.paths.src}/js/main.js`
  ], ['webpack']);
});
