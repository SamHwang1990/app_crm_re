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

var logger = require('tracer').colorConsole();

module.exports = function* notFound(next){
	yield* next;

	if (this.status && this.status !== 404) {
		return;
	}
	if (this.body) {
		return;
	}

	var m = /^\/([\w\-\.]+)\/?$/.exec(this.path);
	if (!m) {
		// scoped packages
		m = /^\/(@[\w\-\.]+\/[\w\-\.]+)$/.exec(this.path);
	}
	logger.error('%s match %j', this.url, m);
	if (m) {
		return this.redirect('/package/' + m[1]);
	}

	// package not found
	m = /\/package\/([\w\-\_\.]+)\/?$/.exec(this.url);
	var name = null;
	var title = '404: Page Not Found';
	if (m) {
		name = m[1];
		title = name + ' Not Found';
	}

	this.status = 404;
	this.body = {
		title: title,
		name: name
	};

};
