const browserSync = require('browser-sync');
const server = browserSync.create();

const gulp = require('gulp');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const { src, series, parallel, dest, watch } = require('gulp');

sass.compiler = require('node-sass');

const IMG_PATH = 'src/public/images/*';

function imgOptimTask() {
  return src(IMG_PATH)
    .pipe(imagemin())
    .pipe(gulp.dest('src/public/images'))
}

function watchTask() {
  watch(
    [IMG_PATH],
    { interval: 1000 },
    series(parallel(imgOptimTask)))
}

exports.imgOptimTask = imgOptimTask;
exports.default = series(parallel(imgOptimTask), watchTask);