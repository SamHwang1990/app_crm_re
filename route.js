/**!
 * crm.appedu.org - route/index.js
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

var fs = require("fs");
var path = require("path");

function routes(app){
	app.get('/', function* (next){
		this.body = yield fs.readFile(path.join(__dirname,'/public/src/index.html'));
		return yield next;
	})
}

module.exports = routes;