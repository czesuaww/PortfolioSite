const { src, dest, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const cssnano = require("gulp-cssnano");
const rename = require("gulp-rename");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const imagemin = require("gulp-imagemin");

const paths = {
  sass: "./src/sass/**/*.scss",
  js: "./src/js/**/*.js",
  img: "./src/img/*",
  sassDest: "./dist/css",
  jsDest: "./dist/js",
  imgDest: "./dist/img",
};

function buildStyles(done) {
  src(paths.sass)
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(cssnano())
    .pipe(rename({ suffix: ".min" }))
    .pipe(dest(paths.sassDest));
  done();
}

function javaScript(done) {
  src(paths.js)
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(uglify())
    .pipe(rename({ suffix: ".min" }))
    .pipe(dest(paths.jsDest));
  done();
}

function convertImg(done) {
  src(paths.img).pipe(imagemin()).pipe(dest(paths.imgDest));
  done();
}

exports.default = series(buildStyles, javaScript, convertImg);
