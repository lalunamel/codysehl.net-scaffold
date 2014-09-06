var gulp = require('gulp');

var config = {}

gulp.task('build', function() {
	gulp.src('./bower_components/semantic.gs/stylesheets/styl/**')
		.pipe(gulp.dest('./styl/'))
});

gulp.task('default', ['build']);