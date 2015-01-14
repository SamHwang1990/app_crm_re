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

var co = require('co');

co(function* (){

	var a = yield Promise.resolve(200);
	console.log(a);

	var b = yield Promise.resolve("jkjkj");
	console.log(b);

	var c = yield Promise.resolve({name:"sam", gender:"male"});
	console.log(c);
	return c;
}).then(function(values){
	console.log(values);
},function(reason){
	console.log("rejected");
});
