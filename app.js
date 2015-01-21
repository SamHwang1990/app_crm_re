/**!
 * crm.appedu.org - server/web.js
 *
 * Copyright(c) crm.appedu.org and other contributors.
 * MIT Licensed
 *
 * Authors:
 *  samhwang1990 <samhwang1990@gmail.com> (http://SamHwang1990.github.com)
 */

"use strict";

/*
* Module Dependencies
* */

var http = require('http');
var path = require('path');
var koa = require('koa');
var middlewares = require('koa-common');
var bodyParser = require('koa-bodyparser');
var router = require('koa-router');
var render = require('koa-ejs');

var staticCache = require('./middleware/static');
var logger = require('./middleware/logger');
var routes = require('./route');
var config = require('./config');


var app = koa();

// x-response-time middleware
app.use(middlewares.responseTime());

// logger
app.use(function* (next){
	var logMsg =
		'Protocol: ' + this.protocol +
		' Path: ' + this.path +
		' Method: ' + this.method;
	logger.info(logMsg);
	yield next;
});

// favicon, Static Cache Handle
staticCache(app);

// Session, body-parser middleware
app.use(bodyParser());

// passport and auth

// Init Template Render
render(app, {
	root: path.join(__dirname, 'public/src'),
	layout: false,
	viewExt: 'html',
	cache: false,
	debug: true
});

// route
app.use(router(app));
routes(app);

// error handler
app.on('error',function(err, ctx){
	err.url = err.url || ctx.request.url;
	logger.error(err);
	logger.info(err.stack);
});

// server listen
if (!module.parent) {
	app.listen(config.server.listenPort);
	logger.info('[%s] [worker:%d] Server started, web listen at %s:%d',
		new Date(), process.pid,
		config.server.bindingHost, config.server.listenPort);
}

module.exports = app;