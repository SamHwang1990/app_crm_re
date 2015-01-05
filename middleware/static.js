/**!
 * crm.appedu.org - middleware/static.js
 *
 * Copyright(c) crm.appedu.org and other contributors.
 * MIT Licensed
 *
 * Authors:
 *  samhwang1990 <samhwang1990@gmail.com> (http://SamHwang1990.github.com)
 */

"use strict";

/*
* Module dependencies
* */

var path = require('path');
var middlewares = require('koa-common');
var config = require('../config');


module.exports = function(app){
	// Serve up the favicon
	app.use(middlewares.favicon(config.server.designFolder + '/favicon.ico'));

	// First looks for a static file: index.html, css, images, etc.
	app.use(middlewares.mount(config.server.staticUrl, middlewares.compress()));
	app.use(middlewares.mount(config.server.staticUrl, middlewares.static(config.server.designFolder,{
		maxAge: config.debug ? 0 : 60 * 60 * 24 * 7
	})));
};