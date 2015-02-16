/**
 * Created by sam on 15-2-14.
 */



var Eventproxy = require('eventproxy');
var config = require('./index');
var logger = require('../utils/logger');
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
    logger.info('admin initialize: checking');
    UserInfoDal.findByEmail(defaultAdmin.Email, function(err, user){
      if(err){
        logger.error('There was an error checking the default admin!');
      }
      done(err, user);
    });
  },
  createDocuement: function(done){
    logger.info('admin initialize: creating');
    UserInfoDal.create(
      defaultAdmin.NameCn,
      defaultAdmin.NameEn,
      defaultAdmin.Passwd,
      defaultAdmin.IsAdmin,
      defaultAdmin.Gender,
      defaultAdmin.Email,
      '',
      '',
      defaultAdmin.Remark,
      function(err){
        if(err){
          logger.error('There was an error adding the default admin!');
        }
        done(err);
      }
    )
  },
  deleteDocuement: function(done){
    logger.info('admin initialize: deleting');
    UserInfoDal.removeByEmail(defaultAdmin.Email, function(err){
      if(err){
        logger.error('There was an error removing the default admin!');
      }
      done(err);
    });
  },
  addAdminUser: function(done){
    var ep = new Eventproxy();

    ep.all('initDone', function(initResult){
      initDB.createDocuement(function(err){
        if(err){
          return ep.emit('error', err);
        }else{
          return logger.info('the default admin user initializing done!');
        }
      })
    });

    ep.fail(function(err){
      if(err){
        return logger.error('something errors happened when init the default admin!');
      }
    });

    logger.info('checking whether the default user is existed!');
    initDB.checkDocument(function(err, user){
      if(err){
        return ep.emit('error', err);
      }
      if(user){
        logger.info('the default admin user have been existed, and going to delete it!');
        initDB.deleteDocuement(ep.done('initDone'));
      } else{
        ep.emit('initDone', true)
      }
    })
  }
};

module.exports = initDB;
