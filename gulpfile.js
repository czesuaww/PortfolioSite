const { src, dest, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const cssnano = require("gulp-cssnano");
const rename = require("gulp-rename");
const babel = require("gulp-babel");

const paths = {
  sass: "./src/sass/**/*.scss",
  js: "./src/js/**/*.js",
  sassDest: "./dist/css",
  jsDest: "./dist/js",
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
    .pipe(rename({ suffix: ".min" }))
    .pipe(dest(paths.jsDest));
  done();
}

exports.default = series(buildStyles, javaScript);
