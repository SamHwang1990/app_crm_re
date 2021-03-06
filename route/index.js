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

var logger = require('../utils/logger');
var getLocateModule = require('../utils/getLocate')();
var apiRoute = require('./apiRoute');
var authRoute = require('./authRoute');
var config = require('../config');

module.exports = function(app){
	app.use('/api', require('./apiRoute'));
	app.use('/auth', require('./authRoute'));
	app.use(function(req, res, next){
    var locate, title, htmlLang;

		locate = getLocateModule.getLocate(req.path, req.acceptsLanguages());

    // TODO: Try to store locate info to session
		app.locals.locate = locate;
    title = config.title[locate];
    htmlLang = config.htmlLang[locate];

		//TODO: render index
		return res.render('index',{
			locate: locate,
      title: title,
      htmlLang: htmlLang
		})
	});
};
