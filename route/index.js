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

function *authed(next){
	if (this.req.isAuthenticated()){
		yield next;
	} else {
		//Set redirect path in session
		this.session.returnTo = this.session.returnTo || this.req.url;
		this.redirect('/auth/login');
	}
}

function routes(app){
	var locate;

	app.use(Router(app));
	app.use(mount('/api', apiRoute.middleware()));
	app.use(mount('/auth', authRoute.middleware()));
	app.use(function* (){
		locate = getLocateModule.getLocate(this.request.path, this.acceptsLanguages());
		this.session.locate = locate;

		yield this.render('index', {
			locate: locate
		});
	});
}

module.exports = function(app){

	var locate;

	app.use('/api', require('./apiRoute'));
	app.use('/auth', require('./authRoute'));
	app.use(function(req, res, next){
		locate = getLocateModule.getLocate(req.path, req.acceptsLanguages());
		req.session.locate = locate;

		//TODO: render index
	});
};
