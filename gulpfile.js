// import gulp from "gulp"; 
const gulp = require("gulp")
// import sass from "gulp-sass";
const sass = require("gulp-sass");

gulp.task("sass", function () {
    return gulp.src("scss/main.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest("css"))
});
gulp.task("watch", function () {
    gulp.watch("scss/**/*.scss", gulp.series("sass"));
});