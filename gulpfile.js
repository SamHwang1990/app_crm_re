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
var nib = require('nib');
var sourcemaps = require('gulp-sourcemaps');
var path = require('path');

var config = require('./config');

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

gulp.task('default',['design_stylus', 'stylus'],function(){
	return gulp.watch(['./stylus/**/*.styl',config.server.designFolder + 'imgs/*'],['design_stylus', 'stylus']);
});

