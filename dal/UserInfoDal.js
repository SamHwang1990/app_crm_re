/**
 * Created by sam on 15-2-12.
 * DAL/UserInfoDAL.js
 * database access interface
 */

var models = require('../models');
var UserInfoModel = models.UserInfo;

exports.findById = function(userId, done){
    UserInfoModel.findOne({_id: userId}, done);
};

exports.findByEmail = function(userEmail, done){
    UserInfoModel.findOne({Email: userEmail}, done);
};

exports.findByNameCn = function(userNameCn, done){
    UserInfoModel.findOne({NameCn: userNameCn}, done);
};
