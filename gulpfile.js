/**
 * Created by drfu on 16-4-26.
 */
var gulp = require('gulp');

var uglify = require('gulp-uglify');
var less = require('gulp-less');
var rename = require('gulp-rename');
var watch = require('gulp-watch');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');

gulp.task("hint", function () {
    gulp.src("./js/scripts/*.js")
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('less', function () {
    gulp.src('./style/css/*.less')
        .pipe(less())
        .pipe(gulp.dest('./style/css'));
});

gulp.task("uglify", function () {
    gulp.src("./style/css/*.css")
        .pipe(uglify())
        .pipe(gulp.dest("./style/css"));
});

gulp.task("default", function() {
    gulp.run("hint", "less", "uglify");
    gulp.watch("./js/scripts/*.js", function() {
        gulp.run
    })
});