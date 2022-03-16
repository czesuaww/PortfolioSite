const { src, dest } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

const paths = {
  sass: "./src/sass/**/*.scss",
};

function buildStyles(done) {
  src(paths.sass).pipe(sass().on("error", sass.logError)).pipe(dest(paths.sassDest));
  done();
}

exports.buildStyles = buildStyles;
