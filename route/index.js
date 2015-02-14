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
var getLocateModule = require('../utils/getLocate')();
var apiRoute = require('./apiRoute');
var authRoute = require('./authRoute');

module.exports = function(app){

	var locate;

	app.use('/api', require('./apiRoute'));
	app.use('/auth', require('./authRoute'));
	app.use(function(req, res, next){
		locate = getLocateModule.getLocate(req.path, req.acceptsLanguages());
		app.locals.locate = locate;

		//TODO: render index
		return res.render('index',{
			locate: locate
		})
	});
};
