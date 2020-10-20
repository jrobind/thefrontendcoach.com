const browserSync = require('browser-sync');
const server = browserSync.create();

const gulp = require('gulp');
const fileinclude = require('gulp-file-include');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const { src, series, parallel, dest, watch } = require('gulp');

sass.compiler = require('node-sass');

const JS_PATH = 'src/js/**/*.js';
const CSS_PATH = 'src/scss/**/*.scss';
const HTML_PATH = 'src/**/*.html';
const IMG_PATH = 'src/images/*';
const FONT_PATH = 'src/fonts/*';


function reload(done) {
  server.reload();
  done();
}

function serve(done) {
  server.init({
    server: {
      baseDir: './dist'
    }
  });
  done();
}

function copyHtmlTask() {
  return src(HTML_PATH)
    .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
    }))
    .pipe(gulp.dest('dist'));
}

function copyFontTask() {
  return src(FONT_PATH)
    .pipe(gulp.dest('dist/fonts'));
}

function imgOptimTask() {
  return src(IMG_PATH)
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));
}

function jsTask() {
  return src(JS_PATH)
    .pipe(sourcemaps.init())
    .pipe(concat('index.js'))
    .pipe(terser())
    .pipe(sourcemaps.write('.'))
    .pipe(dest('dist/js'));
}

function cssTask() {
  return src(CSS_PATH)
    .pipe(sourcemaps.init())
    .pipe(concat('style.scss'))
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('dist/css'));
}

function watchTask() {
  watch(
    [CSS_PATH, JS_PATH, IMG_PATH, HTML_PATH],
    { interval: 1000 },
    series(parallel(copyHtmlTask, imgOptimTask, jsTask, cssTask), reload))
}

exports.jsTask = jsTask;
exports.cssTask = cssTask;
exports.copyHtmlTask = copyHtmlTask;
exports.copyFontTask = copyFontTask;
exports.imgOptimTask = imgOptimTask;
exports.default = series(parallel(copyHtmlTask, copyFontTask, serve, imgOptimTask, jsTask, cssTask), watchTask);