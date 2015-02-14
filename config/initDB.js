/**
 * Created by sam on 15-2-14.
 */

var config = require('./index');
var UserInfoDal = require('../dal').UserInfoDAL;

var defaultAdmin = {
    Email: 'admin@appedu.org',
    NameCn: '管理员',
    NameEn: 'Admin',
    Passwd: 'appers2006',
    IsAdmin: true,
    Gender: 0,
    Remark: 'admin user, all authentication pass!'
};

var initDB = {
    initialize: function(){

    },
    checkDocument: function(done){

    },
    createDocuement: function(){

    },
    deleteDocuement: function(){

    },
    addAdminUser: function(){

    }
};

module.exports = initDB;
