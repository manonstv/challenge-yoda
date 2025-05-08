// gulpfile.js

// Importer les modules nécessaires
const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-html-minifier-terser');

// Chemins des fichiers source et destination
const paths = {
  css: {
    src: './src/css/*.css',
    dest: './docs/css/'
  },
  html: {
    src: './src/*.html',
    dest: './docs/'
  }
};

// Tâche : Minification et autoprefixing du CSS
function styles() {
  const plugins = [
    autoprefixer({ cascade: false, grid: "autoplace" })
  ];

  return gulp
    .src(paths.css.src)
    .pipe(postcss(plugins))
    .pipe(cleanCSS({
      level: {
        1: {
          all: true,
          specialComments: 0
        }
      }
    }))
    .pipe(gulp.dest(paths.css.dest));
}

// Tâche : Minification du HTML
function html() {
  return gulp
    .src(paths.html.src)
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true,
      minifyCSS: true,
      minifyJS: true
    }))
    .pipe(gulp.dest(paths.html.dest));
}

// Tâche par défaut : Exécute toutes les tâches
exports.default = gulp.series(styles, html);