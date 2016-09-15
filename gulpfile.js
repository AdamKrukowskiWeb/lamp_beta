var gulp = require('gulp')
    gutil = require('gulp-util');
    sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src('source/scss/**/*.scss');
    .pipe(sass())
    .pipe(gulp.dest('public/assets/stylesheets'));
});

gulp.task('sass:watch', function(){
    gulp.watch('source/scss/**/*scss',['sass']);    
  
});



gulp.task('default', function(){
    return gutil.log("gulp smiga");
});