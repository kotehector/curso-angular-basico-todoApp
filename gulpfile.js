var gulp = require('gulp');
var exec = require('gulp-exec');
var mainBowerFiles = require('main-bower-files');
var util = require('gulp-util');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var templateCache = require('gulp-angular-templatecache');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var series = require('stream-series');
var inject = require('gulp-inject');
var path = require('path');
var angularNaturalSort = require('gulp-natural-sort');
var angularFilesort = require('gulp-angular-filesort');

//* Paths
const paths = {
  root: './src/'
};


//* Default Task -> gulp
gulp.task('default', [
  'inject',
  'build-css'
], function() {
  return util.log('Gulp completed all tasks!');
});

//* Compiled scss on css
gulp.task('build-css', function() {
  return gulp.src(paths.root + 'sass/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest(paths.root + 'css'));
})

//* Inject all files into index.html
gulp.task('inject', function() {
  var libs = gulp.src(mainBowerFiles());
  var myapp = gulp.src(['!' + paths.root + "bower_components/**/*.js", paths.root + '**/*.js'])
    .pipe(angularNaturalSort())
    .pipe(angularFilesort());

  gulp.src(paths.root + 'index.html')
    .pipe(inject(series(libs, myapp), { relative: true }))
    .pipe(gulp.dest(paths.root));
});

//* inject dependencies angularjs
gulp.task('annotate', function() {
    return gulp.src(paths.root + 'app/**/*.js')
        .pipe(ngAnnotate())
        .pipe(gulp.dest(paths.root + 'app'));
});

//* create template cache for all html files
gulp.task('templates', function() {
    return gulp.src(paths.root + 'app/**/*.html')
        .pipe(templateCache({
          root: 'app',
          standalone: true,
          transformUrl: function(url) {
            return url.replace(path.dirname(url), '.')
          }
        }))
        .pipe(gulp.dest(paths.root));
});
