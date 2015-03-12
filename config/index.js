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

var config = {
	version: pkg.version,

	// debug mode
	// if in debug mode, some middleware wont load
	// logger module will print to stdout
	debug: true,

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
		mongo:{
			db: 'mongodb://127.0.0.1/app_crm_dev',
			db_name: 'app_crm_dev'
		},
		redis:{
			host: '127.0.0.1',
			port: '6379'

		}
	},

	session_secret: 'app_crm',
  session_name: 'sid',

	/* i18n setting */
	i18nSupport:{
		support:["zh-cn","zh-hk","en-us"],
		default:"zh-cn"
	},

  /* meta info */
  title:{
    "zh-cn":'申博教育客戶管理系统',
    "zh-hk":'申博教育客戶管理系統',
    'en-us':'APP Client Manage System'
  },
  htmlLang:{
    "zh-cn":'zh-CN',
    "zh-hk":'zh-HK',
    "en-us":'en-US'
  },

  // default is 7 day
  cookieMaxAge: 7*24*60*60*1000
};

module.exports = config;