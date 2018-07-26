var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect')

// gulp.task('hello', function() {
//     console.log('hello')
// })

// gulp.task('default', ['hello']);
gulp.task('copy-html', function() {
    return gulp.src('./index.html').pipe(gulp.dest('./dist'));
})

// gulp.task('images', function() {
//     return gulp.src('./images/*.jpg').pipe(gulp.dest('./dist/images'));
// })

// gulp.task('images2', function() {
//     return gulp.src('./images/*.{png,jpg}').pipe(gulp.dest('./dist/images'))
// })

// gulp.task('images3', function() {
//     return gulp.src('./images/*').pipe(gulp.dest('./dist/images'))
// })

// gulp.src('./images/*/')
// gulp.src('./images/*/*')
// gulp.src('./images/**/*')

// gulp.task('data', function (){
//     return gulp.src(['xml/*.xml', 'json/*.json']).pipe(gulp.dest('./dist/images'));
// })

// // 在文件中有一些 你不想放在一起 在文件名称之前加上！这时候可以使用排除
// gulp.task('data2', function() {
//     return gulp.src(['xml/*.xml', 'json/*.json', '!json/secret-*.json']).pipe(gulp.dest('./dist/images'))
// })

gulp.task('build', ['copy-html', 'data'], function() {
    console.log('执行这个任务做的事情');
})

gulp.task('watch', function() {
    gulp.watch('./index.html', ['copy-html']);
})

gulp.task('scss', function() {
    return gulp.src('./stylesheets/*')
    .pipe(sass())
    .pipe(gulp.dest('./dist/css'))
})

gulp.task('server', function() {
    connect.server({
        root: './dist',
        port: 3000,
        livereload: true
    })
})