var gulp = require('gulp');
var sass = require('gulp-sass');

var config = {
	paths: {
		iconicSrc: './bower_components/open-iconic/svg/*.svg',
		iconicDest: './build/img/iconic/',
		sassSrc: './src/codysehlSass.scss',
		sassDest: './build/'
	}
};

gulp.task('bower', function() {
	return gulp.src(config.paths.iconicSrc)
		.pipe(gulp.dest(config.paths.iconicDest));
});

gulp.task('sass', function() {
	console.log(config.paths.sassSrc)
	gulp.src(config.paths.sassSrc)
		.pipe(sass({
			errLogToConsole: true
		}))
		.pipe(gulp.dest(config.paths.sassDest));
});

gulp.task('watch', function() {
	gulp.watch(config.paths.sassSrc, ['sass']);
});

gulp.task('default', function() {
	gulp.start('bower', 'sass');
});