const imagemin = require('gulp-imagemin');
const { src, series, parallel, dest, watch } = require('gulp');

const IMG_PATH = 'src/public/images/**/*';

function imgOptimTask() {
  return src(IMG_PATH)
    .pipe(imagemin())
    .pipe(dest('src/public/images'))
}

function watchTask() {
  watch(
    [IMG_PATH],
    { interval: 1000 },
    series(parallel(imgOptimTask)))
}

exports.imgOptimTask = imgOptimTask;
exports.default = series(parallel(imgOptimTask), watchTask);