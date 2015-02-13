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
var render = require('koa-ejs');
var session = require('koa-generic-session');
var redisStore = require('koa-redis');

var packageJson = require('./package.json');
var staticCache = require('./middleware/static');
var logger = require('./middleware/logger');
var routes = require('./route');
var config = require('./config');
var passport = require('./middleware/auth');

var app = koa();

app.use(middlewares.responseTime());

app.use(function* (next){
	var logMsg =
		'Protocol: ' + this.protocol +
		' Path: ' + this.path +
		' Method: ' + this.method;
	logger.info(logMsg);
	yield next;
});

// serve static files
staticCache(app);

// http parser
app.use(bodyParser());

// initialize session
app.keys = ['app-crm'];
app.use(session({
	cookies:{
		signed: true,
		maxage: null
	},
	store: redisStore()
}));

// initialize passport with session
app.use(passport.initialize());
app.use(passport.session());


render(app, {
	root: path.resolve('public/dist'),
	layout: false,
	viewExt: 'html',
	cache: false,
	debug: true
});

routes(app);

app.on('error',function(err, ctx){
	err.url = err.url || ctx.request.url;
	logger.error(err);
	logger.info(err.stack);
});

if (!module.parent) {
	app.listen(config.server.listenPort);
	logger.info('[%s] [worker:%d] Server started, web listen at %s:%d',
		new Date(), process.pid,
		config.server.bindingHost, config.server.listenPort);
}

module.exports = app;