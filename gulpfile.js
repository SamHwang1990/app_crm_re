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

var config = require('./config');

var buildConfig = {
	dist: {
		dir: 'public/dest',
		assets: 'public/dest/assets',
		vendor: 'public/dest/vendor'
	},
	src: {
		dir: 'public/src',
		js: ['src/**/*.js'],
		jsTpl: ['public/dest/templates/**/*.js'],
		html: ['public/src/index.html'],
		tpl: {
			app: ['public/src/app/**/*.tpl.html'],
			common: ['public/src/common/**/*.tpl.html']
		},
		tplDist: 'public/dest/templates'
	}
};

gulp.task('stylus',function(){
	return gulp.src('./stylus/**/*.styl')
		.pipe(plugin.stylus({
			use:nib(),
			compress:true
		}))
		.pipe(gulp.dest('./public/src/assets/css'));
});

gulp.task("design_stylus", function(){
	return gulp.src('./stylus/**/*.styl')
		.pipe(plugin.stylus({
			use:nib(),
			compress:true
		}))
		.pipe(gulp.dest('./public/design/css'));
});

gulp.task('view_il8n',function(){
});

gulp.task('clean',function(){
	return gulp.src(buildConfig.dist.dir, {read: false})
		.pipe(plugin.clean());
});

gulp.task('html2js', function(){
	gulp.src(buildConfig.src.tpl.common)
		.pipe(plugin.ngHtml2js({
			moduleName: 'templates.common',
			prefix:'public/src/common/'
		}))
		.pipe(plugin.concat('common.js'))
		.pipe(gulp.dest(buildConfig.src.tplDist));

	gulp.src(buildConfig.src.tpl.app)
		.pipe(plugin.ngHtml2js({
			moduleName: 'templates.app',
			prefix:'public/src/app/'
		}))
		.pipe(plugin.concat('app.js'))
		.pipe(gulp.dest(buildConfig.src.tplDist));

	return;
});

gulp.task('concat', function(){
	//concat index.
	gulp.src(buildConfig.src.dir + '/index.html')
		.pipe(plugin.concat('index.html'))
		.pipe(gulp.dest(buildConfig.dist.dir));

	//concat assets

	/* concat vendors */

	// concat angular.js
	gulp.src('public/bower_components/angular/angular.js')
		.pipe(plugin.concat('angular.js'))
		.pipe(gulp.dest(buildConfig.dist.vendor));

	return ;
});

gulp.task('copy_assets', function(){

});

gulp.task('build_stylus', function(){

});

gulp.task('release_stylus', function(){

});

gulp.task('client_build', function(){

});

gulp.task('default',['design_stylus', 'stylus'],function(){
	return gulp.watch(['./stylus/**/*',config.server.designFolder + 'imgs/*'],['design_stylus', 'stylus']);
});

