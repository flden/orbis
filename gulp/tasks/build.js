const gulp = require('gulp'),
      runSequence = require('run-sequence'),
      config = require('../config');

const build = (cb) => {
  runSequence(
    'clean',
    'pug',
    'less',
    'css',
    'babel',
//     'images',
//     'webpack',
//     'copy',
    cb
  );
}

gulp.task('build', cb => {
//   config.setEnv('production');
//   config.logEnv();
  build(cb);
});

// gulp.task('build:dev', cb => {
//   config.setEnv('development');
//   config.logEnv();
//   build(cb);
// });