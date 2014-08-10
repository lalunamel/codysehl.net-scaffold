var gulp = require('gulp');
var sass = require('gulp-sass');

var config = {
	paths: {
		iconicSrc: './bower_components/open-iconic/svg/*.svg',
		iconicDest: './build/img/iconic/',
		sassSrc: './src/sass/codysehlSass.scss',
		sassDest: './build/sass/',
		jadeSrc: './src/jade/*.jade',
		jadeDest: './build/jade/'
	}
};

gulp.task('bower', function() {
	return gulp.src(config.paths.iconicSrc)
		.pipe(gulp.dest(config.paths.iconicDest));
});

gulp.task('sass', function() {
	gulp.src(config.paths.sassSrc)
		.pipe(sass({
			errLogToConsole: true
		}))
		.pipe(gulp.dest(config.paths.sassDest));
});

gulp.task('jade', function() {
	gulp.src(config.paths.jadeSrc)
		.pipe(gulp.dest(config.paths.jadeDest));
});

gulp.task('watch', function() {
	gulp.watch(config.paths.sassSrc, ['sass']);
	gulp.watch(config.paths.jadeSrc, ['jade']);
});

gulp.task('default', function() {
	gulp.start('bower', 'sass', 'jade');
});