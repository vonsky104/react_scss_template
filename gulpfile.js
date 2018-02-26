var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')({
      scope: ['devDependencies']
    }),
    babel = require('gulp-babel'),
    browserify = require('browserify'),
    babelify = require("babelify"),
    source = require('vinyl-source-stream'),
    gutil = require('gulp-util');

var path = {
  sass: {
    src: './src/assets/sass/',
    //dist: './src/dist/css/',
    prod: './src/dist/css/'
  },
}

gulp.task('sass', function () {
  return gulp.src(path.sass.src + 'main.scss')
   //.pipe(plugins.sourcemaps.init())
    .pipe(plugins.concat('main_1.1.css'))
    .pipe(plugins.sass().on('error', plugins.sass.logError))
   //.pipe(plugins.sourcemaps.write('.'))

    .pipe(gulp.dest(path.sass.prod))
});

//
// gulp.task('fonts', function(){
//      gulp.src(path.fonts.src + '**/*.*')
//     .pipe(gulp.dest(path.fonts.prod))
// });

gulp.task('default', ['sass'], function(){
  gulp.watch(path.sass.src + "**/*.scss", ['sass']);
});
