const { src, dest } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const cssnano = require("gulp-cssnano");

const paths = {
  sass: "./src/sass/**/*.scss",
  sassDest: "./dist/css",
};

function buildStyles(done) {
  src(paths.sass).pipe(sass().on("error", sass.logError)).pipe(autoprefixer()).pipe(cssnano()).pipe(dest(paths.sassDest));
  done();
}

exports.buildStyles = buildStyles;
