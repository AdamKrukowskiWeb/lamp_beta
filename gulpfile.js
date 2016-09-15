var gulp = require('gulp')
    gutil = require('gulp-util');
    sass = require('gulp-sass');


gulp.watch('source/scss/**/*scss',['sass']);


gulp.task('default', function(){
    return gutil.log("gulp smiga");
});