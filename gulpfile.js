// Load plugins
var gulp = require('gulp')
var sass = require('gulp-sass');
var util = require('gulp-util');
var connect = require('gulp-connect');
  
// sass
var styleInput = './source/scss/**/*.scss';
var styleOutput = './public/assets/css';

gulp.task('sass', function(){
    gulp
    .src(styleInput)
    .pipe(sass())
    
    .pipe(gulp.dest(styleOutput))
    .pipe(connect.reload()) // dodanie odswiezania do sass dzieki conenct
});

// connect 
gulp.task('server', function(){
    connect.server({
        livereload: true
    });
});
    // connect - src
    gulp.task('html', function(){
        gulp
        .src('./index.html')
        .pipe(connect.reload());
    });

// Watch
gulp.task('watch', function(){
    gulp.watch(styleInput, ['sass']);
    gulp.watch(['./index.html'], ['html']);
});

// Tasks
gulp.task('default', ['sass','server','watch']);


