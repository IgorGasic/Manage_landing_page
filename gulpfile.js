const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');

const files = {
    scssPath: 'app/scss/**/*.scss',
}

function sassTask(){
    return gulp.src(files.scssPath)
        .pipe(sass())
        .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest('app/css'))
}

function watchTask(){
    gulp.watch(files.scssPath, sassTask)
};

exports.default = gulp.series(
    sassTask,
    watchTask
);