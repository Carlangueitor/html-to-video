var gulp = require('gulp');

var compass = require('gulp-compass');
var connect = require('gulp-connect');
var _open = require('gulp-open');
var watch = require('gulp-watch');

gulp.task('styles', function() {
  return gulp.src('./*.scss')
    .pipe(compass({
      css: '.',
      sass: '.'
    }))
    .pipe(connect.reload());
});

gulp.task('html', function() {
  gulp.src('./index.html')
    .pipe(connect.reload());
});

gulp.task('js', function() {
  gulp.src('./*.js')
    .pipe(connect.reload());
});

gulp.task('connect', function() {
  connect.server({
    root: __dirname,
    livereload: true
  });
});

gulp.task('watch', function() {
  watch(['./*.scss'], ['styles']);
  watch(['./index.html'], ['html']);
  watch(['./*.js'], ['js']);
});

gulp.task('open', function() {
  gulp.src('./index.html')
    .pipe(_open('', {
      url: 'http://localhost:8080'
    }));
});

gulp.task('default', ['styles', 'watch', 'connect', 'open']);
