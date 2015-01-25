/**!
 * crm.appedu.org - gulpfile.js
 *
 * Copyright(c) crm.appedu.org and other contributors.
 * MIT Licensed
 *
 * Authors:
 *  samhwang1990 <samhwang1990@gmail.com> (http://SamHwang1990.github.com)
 */

"use strict";

var gulp = require('gulp');
var plugin = require('gulp-load-plugins')();

var path = require('path');
var nib = require('nib');
var rimraf = require('rimraf');

var config = require('./config');

var buildConfig = {
	dist: {
		dir: 'public/dest',
		assets: 'public/dest/assets',
		vendor: 'public/dest/vendor'
	},
	src: {
		dir: 'public/src',
		js: 'public/src/**/*.js',
		jsTpl: 'public/dest/templates/**/*.js',
		html: 'public/src/index.html',
		tpl: {
			app: ['public/src/app/**/*.tpl.html'],
			common: ['public/src/common/**/*.tpl.html']
		},
		tplDist: 'public/dest/templates'
	}
};

gulp.task('compile-stylus',function(){
	gulp.src('./stylus/**/*.styl')
		.pipe(plugin.stylus({
			use:nib(),
			compress:true
		}))
		.pipe(gulp.dest('./public/src/assets/css'))
		.pipe(gulp.dest('./public/design/css'));
});

gulp.task('view_il8n',function(){
});

gulp.task('clean',function(){
	rimraf.sync(path.join(__dirname, "public/dest"));
});

gulp.task('html2js-common', function(){
	return gulp.src(buildConfig.src.tpl.common)
		.pipe(plugin.ngHtml2js({
			moduleName: 'templates.common',
			prefix: ''
		}))
		.pipe(plugin.concat('common.js'))
		.pipe(gulp.dest(buildConfig.src.tplDist));
});

gulp.task('html2js-app', function(){
	return gulp.src(buildConfig.src.tpl.app)
		.pipe(plugin.ngHtml2js({
			moduleName: 'templates.app',
			prefix: ''
		}))
		.pipe(plugin.concat('app.js'))
		.pipe(gulp.dest(buildConfig.src.tplDist));
});

gulp.task('concat-app', function(){
	return gulp.src([buildConfig.src.js, buildConfig.src.jsTpl])
		.pipe(plugin.concat('appcrm.js'))
		.pipe(gulp.dest(buildConfig.dist.dir));
});

gulp.task('concat-index', function(){
	return gulp.src(buildConfig.src.dir + '/index.html')
		.pipe(plugin.concat('index.html'))
		.pipe(gulp.dest(buildConfig.dist.dir));
});

gulp.task('concat-vendors', function(){
	return gulp.src('public/bower_components/angular/angular.js')
		.pipe(gulp.dest(buildConfig.dist.vendor));
});

gulp.task('concat-css', function(){
	return gulp.src('public/src/assets/css/appcrm.css')
		.pipe(gulp.dest(buildConfig.dist.dir));
});

gulp.task('concat-imgs', function(){
	return gulp.src('public/src/assets/imgs/*')
		.pipe(gulp.dest(buildConfig.dist.dir + '/imgs'));
});

gulp.task('concat-favicon', function(){
	return gulp.src('public/src/assets/favicon.ico')
		.pipe(gulp.dest(buildConfig.dist.dir));
});

gulp.task('client-build',[
	'compile-stylus',
	'html2js-common',
	'html2js-app',
	'concat-app',
	'concat-index',
	'concat-vendors',
	'copy-css',
	'copy-imgs',
	'copy-favicon']);

gulp.task('client-watch',['clean', 'client-build'],function(){
	return gulp.watch(['./stylus/**/*',
		buildConfig.src.js,
		buildConfig.src.html,
		buildConfig.src.jsTpl,
		buildConfig.src.tpl.app,
		buildConfig.src.tpl.common],['client-build']);
});

