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

var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var redisStore = require('connect-redis')(session);

var packageJson = require('./package.json');
var logger = require('./utils/logger');
var routes = require('./route');
var config = require('./config');
var passport = require('./middleware/auth');

var app = express();

// set x-response-time to response header
app.use(require('response-time')());

// request log
app.use(function(req, res, next){
	var logMsg =
		'Protocol: ' + req.protocol +
		' Path: ' + req.path +
		' Method: ' + req.method;
	logger.info(logMsg);
	next();
});

// serve static files
app.use(config.server.staticUrl,express.static(config.server.distFolder));

// body parser
app.use(require('method-override')());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended:true
}));

// cookie and session handle
app.use(require('cookie-parser')(config.session_secret));
app.use(session({
	secret:config.session_secret,
	name: config.session_name,
	store:new redisStore({
		host: config.database.redis.host,
		port: config.database.redis.port
	}),
	resave: true,
	saveUninitialized: false,	//TODO: it is not so sure to use false when i am associating with PassportJS
  cookie: {
    maxAge: config.debug ? null : config.cookieMaxAge
  }
}));

// passport handler
app.use(passport.initialize());
app.use(passport.session());

// ejs render
app.set('views', path.join(__dirname, 'public/dist'));
app.set('view engine', 'html');
app.set('view cache', !config.debug);
app.engine('html', require('ejs-mate'));

// compress all request
app.use(require('compression')());

// route handle
routes(app);

// error handle
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