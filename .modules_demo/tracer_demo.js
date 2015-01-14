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

var logger = require('tracer').colorConsole({
	format : [
		"{{timestamp}} <{{title}}> {{message}} (in {{file}}:{{line}})", //default format
		{
			error : "{{timestamp}} <{{title}}> {{message}} (in {{file}}:{{line}})\nCall Stack:\n{{stack}}" // error format
		}
	],
	dateformat : "HH:MM:ss.L",
	preprocess :  function(data){
		data.title = data.title.toUpperCase();
	}
});

logger.log('hello');
logger.trace('hello','world');
logger.debug('hello %s', 'world', 123);
logger.info('hello %s %d', 'world', 123, {foo:'bar'});
logger.warn('hello %s %d %j', 'world', 123, {foo:'bar'});
logger.error('hello %s %d %j', 'world', 123, {foo:'bar'}, [1, 2, 3, 4], Object);