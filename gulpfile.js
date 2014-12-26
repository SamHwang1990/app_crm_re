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
	return gulp.src('./stylus/appcrm.styl')
		.pipe(stylus({
			use:nib(),
			compress:true,
			sourcemap: {
				inline: true,
				sourceRoot: '..',
				basePath: 'css'
			}
		}))
		.pipe(gulp.dest('./public/src/assets/css'));
});

gulp.task('default',['stylus'],function(){
	return gulp.watch(['./stylus/*',config.server.distFolder + 'assets/imgs/*'],['stylus']);
});

