let gulp = require('gulp'),
    autoprefixer = require("gulp-autoprefixer"),
    sass = require('gulp-sass')(require('sass'));


function buildStyles() {
    return gulp.src('assets/scss/**/*.scss', "!" + "assets/scss/**/_*.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
                overrideBrowserList: ["last 5 versions"],
                cascade: true
            })
        )
        .pipe(gulp.dest('src/css'));
}

function watchFiles() {
    gulp.watch('assets/scss/**/*.scss', buildStyles);
}

let build = gulp.series(gulp.parallel(buildStyles));
let watch = gulp.parallel(build, watchFiles);

exports.buildStyles = buildStyles;
exports.default = watch;
exports.build = build;

