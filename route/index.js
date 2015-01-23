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
var config = require('../config');
var i18nSupport = config.i18nSupport;

var getLocateFromPath = function(path){
	var pathReg = /\/([a-zA-Z0-9\-_\.]+)\/?.*/i;
	var pathMatch, pathI18n;

	pathMatch = pathReg.exec(path);
	if(!pathMatch){
		return '';
	}

	pathI18n = pathMatch[1].toLowerCase();
	if(i18nSupport.support.indexOf(pathI18n) === -1){
		return '';
	}

	return pathI18n;
};

var getLocateFromHeader = function(acceptLanguages){
	var locate,
		acceptLangLength,
		i=0,
		currentLang;
	if(!acceptLanguages){
		return '';
	}

	acceptLangLength = acceptLanguages.length;
	// get the first accept language type which is supported by system
	for(i; i<acceptLangLength;i++){
		currentLang = acceptLanguages[i].toLowerCase();
		if(i18nSupport.support.indexOf(currentLang) === -1){
			continue;
		}
		locate = currentLang;
		break;
	}
	return locate;
};

var getLocate = function(request){
	var locate;
	locate = getLocateFromPath(request.path);
	if(!locate){
		locate = getLocateFromHeader(request.acceptsLanguages());
	}
	if(!locate){
		locate = i18nSupport.default;
	}
	return locate;
};

function routes(app){
	var locate;
	var apiRouter = new Router();

	app.use(Router(app));

	apiRouter.get('/test', function* (){
		this.response.body = this.path;
		return;
	});


	app.use(mount('/api', apiRouter.middleware()));

	app.use(function* (next){
		locate = getLocate(this.request);
		console.log("i'm in all");
		this.response.body = locate;
		yield next;
	});
}

module.exports = routes;
