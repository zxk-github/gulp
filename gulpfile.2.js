var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('copy-html', function() {
    return gulp.src('index.html')
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
})

gulp.task('watch', function() {
    gulp.watch('index.html', ['copy-html']);
})

gulp.task('server', function() {
    connect.server({
        root: 'dist',
        port: 3000,
        livereload: true
    })
})

gulp.task('default', ['server', 'watch']);
