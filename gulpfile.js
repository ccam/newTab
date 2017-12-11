https://www.npmjs.com/package/uglify-es

var gulp = require('gulp'),
sass = require('gulp-sass'),
cleanCSS = require('gulp-clean-css'),
uglify = require('gulp-uglify'),
pump = require('pump')
server = require('gulp-server-livereload'),
browserSync = require('browser-sync').create();


gulp.task('serve', ['sass'], function() {
browserSync.init({
server: './src'
});

gulp.watch('./src/scss/*.scss', ['sass']);
gulp.watch('./src/*.html').on('change', browserSync.reload);

gulp.watch('./src/js/*.js').on('change', browserSync.reload)
});


gulp.task('sass', function() {
return gulp.src('./src/scss/main.scss')
.pipe(sass.sync().on('error', sass.logError))
.pipe(gulp.dest('./src/css'))
.pipe(browserSync.stream());
});

gulp.task('min-css', function () {
return gulp.src('src/css/main.css')
.pipe(cleanCSS({compatibility: 'ie8'}))
.pipe(gulp.dest('dist/css'));
});

gulp.task('min-js', function (cb) {
  pump([
        gulp.src('src/js/*.js'),
        uglify(),
        gulp.dest('dist/js')
    ],
    cb
  );
});

gulp.task('server', function() {
gulp.src('src')
.pipe(server ({
livereload: true,
open: true,
port: 1337
}));
});

gulp.task('main', ['serve'])
gulp.task('build', ['min-css', 'min-js'])

gulp.task('default', ['main']);