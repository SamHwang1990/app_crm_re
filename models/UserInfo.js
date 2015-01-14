/**!
 * crm.appedu.org - models/UserInfo.js
 *
 * Copyright(c) crm.appedu.org and other contributors.
 * MIT Licensed
 *
 * Authors:
 *  samhwang1990 <samhwang1990@gmail.com> (http://SamHwang1990.github.com)
 */

"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var UserInfoSchema = new Schema({
	NameCn:{type: String, index: true},
	NameEn:{type: String, index: true},
	Passwd:{type: String},
	Gender:{type: Number},
	Email:{type: String, index: true},
	Mobile:{type: String},
	Wechat:{type: String},
	Remark:{type: String}
});

mongoose.model('UserInfo', UserInfoSchema);