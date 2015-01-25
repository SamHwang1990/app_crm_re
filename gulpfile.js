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
var stylus = require('gulp-stylus');
var sourcemaps = require('gulp-sourcemaps');
var ngHtml2Js = require('gulp-ng-html2js');
var concat = require('gulp-concat');

var path = require('path');
var nib = require('nib');

var config = require('./config');

var buildConfig = {
	distDir: 'public/dest',
	src: {
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
		.pipe(stylus({
			use:nib(),
			compress:true
		}))
		.pipe(gulp.dest('./public/src/assets/css'));
});

gulp.task("design_stylus", function(){
	return gulp.src('./stylus/**/*.styl')
		.pipe(stylus({
			use:nib(),
			compress:true
		}))
		.pipe(gulp.dest('./public/design/css'));
});

gulp.task('view_il8n',function(){
});

gulp.task('clean',function(){
	return gulp.src(buildConfig.distDir, {read: false})
		.pipe(clean());
});

gulp.task('html2js_common', function(){
	return gulp.src(buildConfig.src.tpl.common)
		.pipe(ngHtml2Js({
			moduleName: 'templates.common',
			prefix:'public/src/common/'
		}))
		.pipe(concat('common.js'))
		.pipe(gulp.dest(buildConfig.src.tplDist));
});

gulp.task('html2js_app', function(){

});

gulp.task('concat', function(){

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

