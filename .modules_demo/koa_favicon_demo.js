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

var koa = require('koa');
var favicon = require('koa-common').favicon;
var app = koa();

app.use(favicon('/public/favicon.ico'));
app.use(function* (next){
	this.body = "hello world";
});

app.listen(3000);

console.log('listening on port 3000');