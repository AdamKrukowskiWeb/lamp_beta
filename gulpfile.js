// Load plugins
var gulp = require('gulp')
    gutil = require('gulp-util');
    sass = require('gulp-sass');
  
// Styles 
var input = './source/scss/**/*.scss';
var output = './public/assets/css';
var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

gulp.task('sass', function(){
    return gulp
    .src(input)
    .pipe(sass(sassOptions).on('error', sass.logError))   
    .pipe(gulp.dest(output));
});

gulp.task('watch', function(){
    gulp.watch(input, ['sass']);
});

gulp.task('default', ['sass'], function() {
  return gutil.log('Gulp is running!')
});
