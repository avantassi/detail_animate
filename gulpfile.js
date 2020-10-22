var gulp = require('gulp'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    gcmq = require('gulp-group-css-media-queries');

gulp.task('sass', function() {
    return gulp.src('src/sass/main.scss')
        .pipe(sass())
        .pipe(gcmq())
        .pipe(gulp.dest('css'))
})


gulp.task('watch', function () {
    gulp.watch('src/sass/*.scss', gulp.parallel('sass'));
});