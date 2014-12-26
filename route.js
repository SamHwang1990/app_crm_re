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
var logger = require('tracer').colorConsole();

function routes(app){
	app.get('/', function* (next){
		this.type = 'text/html';
		this.body = yield new Promise(function(resolve, reject){
			fs.readFile(path.join(__dirname, 'public/src/index.html'),function(err, data){
				if(err){ return reject(err);}
				resolve(data);
			});
		});
	});
}

module.exports = routes;