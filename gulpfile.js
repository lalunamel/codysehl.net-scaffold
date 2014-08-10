var gulp = require('gulp');
var sass = require('gulp-sass');
var run = require('gulp-run');
var rimraf = require('rimraf');


var config = {
	paths: {
		build: 'build',
		iconicSrc: './bower_components/open-iconic/svg/*.svg',
		iconicDest: './build/img/iconic/',
		sassSrc: './src/sass/codysehlSass.scss',
		sassDest: './build/sass/',
		jadeSrc: './src/jade/*.jade',
		jadeDest: './build/jade/'
	}
};

gulp.task('bower', function(done) {
	gulp.src(config.paths.iconicSrc)
		.pipe(gulp.dest(config.paths.iconicDest));
	done();
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

gulp.task('clean', function(done) {
	// remove build dir contents
	rimraf.sync('./build/', function(e) {
		console.log(e)
	});
	done();
});

gulp.task('build', ['clean', 'bower', 'sass', 'jade'], function(done) {
	done();
});

gulp.task('deploy', ['build'], function() {
	run('git subtree push --prefix ' + config.paths.build + ' origin ' + config.paths.build).exec()
		.pipe(gulp.dest('output'));
});

gulp.task('default', ['build']);