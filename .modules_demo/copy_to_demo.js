/**!
 * crm.appedu.org - modules_demos/copy_to_demo.js
 *
 * Copyright(c) crm.appedu.org and other contributors.
 * MIT Licensed
 *
 * Authors:
 *  samhwang1990 <samhwang1990@gmail.com> (http://SamHwang1990.github.com)
 */

"use strict";

var copy = require('copy-to');

var src = {
	_name: 'foo',
	set_name: function(val){
		this._name = val;
	},
	get_name: function(){
		return this._name;
	},
	show: function(){
		console.log(this._name);
	}
};

var des = {
	_name: 'bar'
};

copy(src).pick('_name','show').toCover(des);
des.show();