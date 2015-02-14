/**!
 * crm.appedu.org - models/index.js
 *
 * Copyright(c) crm.appedu.org and other contributors.
 * MIT Licensed
 *
 * Authors:
 *  samhwang1990 <samhwang1990@gmail.com> (http://SamHwang1990.github.com)
 */

"use strict";

var mongoose = require('mongoose');
var logger = require('../middleware/logger');
var config = require('../config');

mongoose.connect(config.database.mongo.db, function(err){
	if(err){
		logger.error('connect to %s error: ', config.db, err.message);
		process.exit(1);
	}
});

// combine the model to mongoose
require('./UserInfo');

exports.UserInfo = mongoose.model('UserInfo');