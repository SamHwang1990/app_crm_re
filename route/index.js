/**!
 * crm.appedu.org -
 *
 * Copyright(c) crm.appedu.org and other contributors.
 * MIT Licensed
 *
 * Authors:
 *  samhwang1990 <samhwang1990@gmail.com> (http://SamHwang1990.github.com)
 */

var _ = require('lodash');
var Router = require('koa-router');
var mount = require('koa-common').mount;

var logger = require('../middleware/logger');
var getLocateModule = require('../utils/getLocate')();

var apiRoute = require('./apiRoute');


function routes(app){
	var locate;

	app.use(Router(app));
	app.use(mount('/api', apiRoute.middleware()));
	app.use(function* (next){
		locate = getLocateModule.getLocate(this.request.path, this.acceptsLanguages());
		this.response.body = locate;
		this.response.status = 200;
		yield next;
	});
}

module.exports = routes;
