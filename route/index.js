/**!
 * crm.appedu.org -
 *
 * Copyright(c) crm.appedu.org and other contributors.
 * MIT Licensed
 *
 * Authors:
 *  samhwang1990 <samhwang1990@gmail.com> (http://SamHwang1990.github.com)
 */

"use strict";

var logger = require('../middleware/logger');

function routes(app){

	app.get('/',function* (){
		yield this.render('index');
	});

	app.get('/home',function* (){
		yield this.render('page/home');
	});
}

module.exports = routes;
