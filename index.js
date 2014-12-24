/**!
 * crm.appedu.org - index
 *
 * Copyright(c) crm.appedu.org and other contributors.
 * MIT Licensed
 *
 * Authors:
 *  samhwang1990 <samhwang1990@gmail.com> (http://SamHwang1990.github.com)
 */

"use strict";

/*
* Module dependencies
* */

var config = require('./config');

exports.loadConfig = config.loadConfig;
exports.config = config;

exports.startWorker = function(customConfig){
	config.loadConfig(customConfig);
};