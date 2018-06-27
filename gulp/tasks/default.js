const gulp = require('gulp'),
      runSequence = require('run-sequence');

gulp.task('default', function (cb){
  runSequence(
    'pug:watch',
    // 'css:watch',
    'less:watch',
    'babel:watch',
    'server',
    cb
  );
});