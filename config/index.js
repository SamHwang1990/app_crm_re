/**!
 * crm.appedu.org - config/config.js
 *
 * Copyright(c) crm.appedu.org and other contributors.
 * MIT Licensed
 *
 * Authors:
 *  samhwang1990 <samhwang1990@gmail.com> (http://SamHwang1990.github.com)
 */

"use strict";

var path = require("path");
var mkdirp = require('mkdirp');
var copy = require('copy-to');
var fs = require('fs');

var pkg = require('../package.json');

var debug = true;

var config = {
	version: pkg.version,

	// debug mode
	// if in debug mode, some middleware wont load
	// logger module will print to stdout
	debug: debug,

	server:{
		bindingHost: '127.0.0.1',
		listenPort: 3000,
		securePort: 8433,
		distFolder: path.resolve(__dirname, '../public/dist'),
		designFolder: path.resolve(__dirname, '../public/design'),
		srcFolder: path.resolve(__dirname, '../public/src'),
		staticUrl : '/static',
		sessionSecret: 'app_crm_session_secret'
	},


	enableCompress: false,

	// default system admins
	admins: {
		// name: email
		admin: 'admin@appedu.org',
		samhwang: 'samhwang1990@gmail.com'
	},

	/*
	* database config
	* */
	database:{
		db: 'mongodb://127.0.0.1/app_crm_dev',
		db_name: 'app_crm_dev'
	},

	/* i18n setting */
	i18nSupport:{
		support:["zh-cn","zh-hk","en-us"],
		default:"zh-cn"
	}
};

module.exports = config;