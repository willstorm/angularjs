var gulp = require('gulp');
var plugin = {
    sourcemaps : require('gulp-sourcemaps'),
    uglify : require('gulp-uglify'),
    minifyCss : require('gulp-minify-css'),
    concat : require('gulp-concat'),
    annotate : require('gulp-ng-annotate')
};

// path to files
var paths = {
    javascript : {
        app : [
            'app.js',
            'app/**/controllers/*.js',
            'app/**/directives/*.js',
            'app/**/filters/*.js',
            'app/**/services/*.js',
            'app/**/boot.js'
        ],
        vendor : [
            'assets/source/js/lib/jquery*.js',
            'assets/source/js/lib/jquery/*.js',
            'assets/source/js/lib/bootstrap*.js',
            'assets/source/js/lib/angular*.js',
            'assets/source/js/lib/angular/*.js'
        ]
    },
    css : {
        vendor : [
            'assets/source/css/lib/*.css'
        ],
        fonts : [
            'assets/source/fonts/*'
        ]
    }
};

// default task
gulp.task('default', ['build-vendor', 'build-app', 'watch']);

// minify app files
gulp.task('build-app', function(){
    return compressJs(paths.javascript.app, 'app.min.js', 'assets/build/js');
});

// minify vendors
gulp.task('build-vendor', function(){
    compressJs(paths.javascript.vendor, 'vendor.min.js', 'assets/build/js');
    compressCss(paths.css.vendor, 'vendor.min.css', 'assets/build/css');
    copy(paths.css.fonts, 'assets/bui')
});

// watch functions
gulp.task('watch', function(){
    gulp.watch(paths.javascript.app, {cwd: './'}, ['build-app']);
    gulp.watch(paths.javascript.vendor, {cwd: './'}, ['build-vendor']);
});

// compress js files
function compressJs(files, name, destination) {
    return gulp.src(files)
        .pipe(plugin.sourcemaps.init())
            .pipe(plugin.concat(name))
            .pipe(plugin.annotate())
            .pipe(plugin.uglify())
        .pipe(plugin.sourcemaps.write('.'))
        .pipe(gulp.dest(destination));
}

// compress css files
function compressCss(files, name, destination) {
    return gulp.src(files)
        .pipe(plugin.sourcemaps.init())
            .pipe(plugin.concat(name))
            .pipe(plugin.minifyCss())
        .pipe(plugin.sourcemaps.write('.'))
        .pipe(gulp.dest(destination));
}

function copy(files, destination) {
    return gulp.src(files)
        .pipe(gulp.dest(destination));
}