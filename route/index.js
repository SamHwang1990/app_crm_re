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

	pathI18n = pathMatch[1];
	if(i18nSupport.support.indexOf(pathI18n) === -1){
		return '';
	}

	return pathI18n;
};

var getLocateFromHeader = function(acceptLanguages){
	if(!acceptLanguages){
		return '';
	}

	// TODO: forEach the i18nSupport to find if there hava a match language
	_.forEach(i18nSupport.support,function(lang){

	});
};

function routes(app){
	var locate;
	app.use(function* (next){
		var responseBody = '';
		locate = getLocate(this.request);
		responseBody += locate;
		responseBody += " ";
		responseBody += this.request.acceptsLanguages();
		responseBody += " ";
		responseBody += this.request.path;
		this.response.body = responseBody;
		yield next;
	});
}

module.exports = routes;
