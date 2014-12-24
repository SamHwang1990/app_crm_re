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
var logger = require('tracer').colorConsole();
var middlewares = require('koa-common');
var bodyParser = require('koa-bodyparser');
var router = require('koa-router');
var koa = require('koa');

var staticCache = require('./middleware/static');
var routes = require('./route');
var config = require('./config');


var app = koa();

app.use(middlewares.responseTime());

// Static Cache Handle
staticCache(app);

// Session, body-parser middleware
app.use(bodyParser());

// passport and auth


// route
app.use(router(app));
routes(app);

// server listen

if (!module.parent) {
	app.listen(config.server.listenPort);
	logger.info("server listen on port: %d", config.server.listenPort);
}

module.exports = app;