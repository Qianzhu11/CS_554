const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

gulp.task('sass', () => {
	return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
	.pipe(sass())
	.pipe(gulp.dest('src/css'));
	.pipe(browserSync.stream());
});

gulp.task('js', () => {
	return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.bootstrap.min.js', 'node_modules/jquery/dist/jquery.jquery.min.js', 'node_modules/popper.js/dist/umd/popper.min.js'])
	.pipe(gulp.dest('src/js'));
});

gulp.task('serve', ['sass'], () => {
	browserSync.init({
		server: './src'
	});

	gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'], ['sass']);
	gulp.watch('src/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['js', 'serve']);