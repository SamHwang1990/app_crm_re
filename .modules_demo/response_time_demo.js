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

var responseTime = require('koa-common').responseTime;
var koa = require('koa');
var app = koa();

app.use(responseTime());

app.use(function *(next){
	yield next;
	yield sleep(150);
	this.body = 'Hello';
});

function sleep(ms) {
	return function(done){
		setTimeout(done, ms);
	}
}

app.listen(3000);

console.log('listening on port 3000');