/**!
 * crm.appedu.org - route/design.js
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

	app.get('/new-student',function* (){
		yield this.render('page/new_student');
	});
}

module.exports = routes;
