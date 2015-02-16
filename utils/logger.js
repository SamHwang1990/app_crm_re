/**!
 * crm.appedu.org - middleware/logger.js
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

var tracer = require('tracer');
var config = require('../config');
var debug = config.debug;

var logger;

if(!debug){
	logger = tracer.dailyfile({root:'./.tmp/log'});
}else {
	logger = tracer.colorConsole();
}

module.exports = logger;