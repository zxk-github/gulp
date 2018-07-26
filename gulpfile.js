const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

gulp.task('scripts', function() {
    return gulp.src(['js/vue.js', 'js/jquery.js'])
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('/dist/js'))
    .pipe(uglify())
    .pipe(rename('vendor.min.js'))
    .pipe(gulp.dest('dist/js'));
})