/* jshint node: true */
'use strict';

var gulp = require('gulp'),
    g = require('gulp-load-plugins')({lazy: false}),
    noop = g.util.noop,
    swig = require('gulp-swig'),
    version = require('../package.json').version,
    template = {
      version: version
    };

gulp.task('styles-dist', ['render-css'], noop);

gulp.task('render-css', function () {
  return gulp.src(['templates/trump.css'])
    .on('error', g.notify.onError('<%= error.message%>'))
    .pipe(g.data(template))
    .pipe(swig())
    .pipe(g.rename('trump.latest.css'))
    .pipe(gulp.dest('dist/latest/css/'))
    .pipe(g.rename('trump.' + version + '.css'))
    .pipe(gulp.dest('dist/'+ version + '/css/'))
    .pipe(g.minifyCss())
    .pipe(g.rename('trump.' + version + '.min.css'))
    .pipe(gulp.dest('dist/'+ version + '/css/'))
    .pipe(g.rename('trump.latest.min.css'))
    .pipe(gulp.dest('dist/latest/css/'));
});

