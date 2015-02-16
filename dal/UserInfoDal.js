/**
 * Created by sam on 15-2-12.
 * DAL/UserInfoDAL.js
 * database access interface
 */

var models = require('../models');
var crypt = require('../utils/crypt');
var UserInfoModel = models.UserInfo;


// region Model Query

exports.findById = function(userId, done){
    UserInfoModel.findOne({_id: userId}, done);
};

exports.findByEmail = function(userEmail, done){
    UserInfoModel.findOne({Email: userEmail}, done);
};

exports.findByNameCn = function(userNameCn, done){
    UserInfoModel.findOne({NameCn: userNameCn}, done);
};

// endregion

// region Model Modify

exports.create = function(nameCn, nameEn, password, isAdmin, gender, email, mobile, wechat, remark, done){
    var user = new UserInfoModel();

    password = crypt.bhash(password);

    user.NameCn = nameCn;
    user.NameEn = nameEn;
    user.Passwd = password;
    user.IsAdmin = isAdmin;
    user.Gender = gender;
    user.Email = email;
    user.Mobile = mobile;
    user.Wechat = wechat;
    user.Remark = remark;
    user.save(done);
};

exports.removeById = function(userId, done){
    UserInfoModel.remove({_id: userId}, done);
};

exports.removeByEmail = function(userEmail, done){
    UserInfoModel.remove({Email: userEmail}, done);
};

// endregion
