var gulp = require('gulp'),
	rename = require('gulp-rename'),
	cleanCSS = require('gulp-clean-css'),
	autoprefixer = require('gulp-autoprefixer'),
	notify = require("gulp-notify"),
	livereload = require('gulp-livereload'),
	connect = require('gulp-connect'),
	jade = require('gulp-jade'),
	sass = require('gulp-sass')

// server connect
gulp.task('connect', function()
{
  connect.server(
  {
    root: 'dest',
    livereload: true
  })
})

// jade
gulp.task('jade', function()
{
	return gulp.src('src/templates/**/*.jade')
		.pipe(jade())
		.pipe(gulp.dest('dest/'))
		.pipe(connect.reload())		
})


// scss 
gulp.task('scss', function ()
{
  return gulp.src('src/scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
			browsers: ['last 15 versions'],
			cascade: false
		}))
    .pipe(cleanCSS())
    .pipe(rename('mainstyle.min.css'))
    .pipe(gulp.dest('dest/css/'))
    .pipe(connect.reload())
});

// js
gulp.task('js', function ()
{
	gulp.src('src/js/*.js')
	.pipe(gulp.dest('dest/js/'))
	.pipe(connect.reload())

})

// img
gulp.task('img', function ()
{
	gulp.src('src/img/*.*')
	.pipe(gulp.dest('dest/img/'))
	.pipe(connect.reload())

})

// watch
gulp.task('watch', function ()
{
	gulp.watch('src/scss/*.scss', ['scss'])
	gulp.watch('src/js/*.js', ['js'])
	gulp.watch('src/img/*.*', ['img'])
	gulp.watch('src/templates/*.jade', ['jade'])
})

// default
gulp.task('default', ['connect', 
						'scss',
						'js',
						'img',
						'jade',
						'watch'
])