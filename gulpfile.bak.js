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

gulp.task('stylus',function(){
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
	gulp.src('public/dest/**/*.*', {read:false})
		.pipe(plugin.clean({force: true}));
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
});

gulp.task('concat', function(){
	//concat application js
	gulp.src([buildConfig.src.js, buildConfig.src.jsTpl])
		.pipe(plugin.concat('appcrm.js'))
		.pipe(gulp.dest(buildConfig.dist.dir));


	//concat index.
	gulp.src(buildConfig.src.dir + '/index.html')
		.pipe(plugin.concat('index.html'))
		.pipe(gulp.dest(buildConfig.dist.dir));

	/* concat vendors */

	// concat angular.js
	gulp.src('public/bower_components/angular/angular.js')
		.pipe(plugin.concat('angular.js'))
		.pipe(gulp.dest(buildConfig.dist.vendor));

});

gulp.task('copy_assets', function(){
	// copy css
	gulp.src('public/src/assets/css/appcrm.css')
		.pipe(gulp.dest(buildConfig.dist.dir));

	// copy imgs
	gulp.src('public/src/assets/imgs/*')
		.pipe(gulp.dest(buildConfig.dist.dir + '/imgs'));

	// copy favicon.ico
	gulp.src('public/src/assets/favicon.ico')
		.pipe(gulp.dest(buildConfig.dist.dir));

});

gulp.task('build_stylus', function(){
	gulp.src('public/src/assets/css/appcrm.css')
		.pipe(gulp.dest(buildConfig.dist.assets + '/css'));

	return ;
});

gulp.task('release_stylus', function(){

});

gulp.task('client_build',['stylus', 'copy_assets', 'html2js', 'concat']);

gulp.task('stylus_watch',['design_stylus', 'stylus'],function(){
	return gulp.watch(['./stylus/**/*',config.server.designFolder + 'imgs/*'],['stylus', 'build_stylus']);
});

gulp.task('client_watch',['clean','client_build'],function(){
	return gulp.watch(['./stylus/**/*',
		buildConfig.src.js,
		buildConfig.src.html,
		buildConfig.src.jsTpl,
		buildConfig.src.tpl.app,
		buildConfig.src.tpl.common],['client_build']);
});

