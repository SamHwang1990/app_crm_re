/**
 * Created by sam on 15-2-14.
 */



var Eventproxy = require('eventproxy');
var config = require('./index');
var logger = require('../utils/logger');
var UserInfoDal = require('../dal').UserInfoDAL;

var initDB = {
  defaultAdmin: {
    Email: 'admin@appedu.org',
    NameCn: '管理员',
    NameEn: 'Admin',
    Passwd: 'appers2006',
    IsAdmin: true,
    Gender: 0,
    Remark: 'admin user, all authentication pass!'
  },
  initialize: function(){

  },
  checkDocument: function(done){
    logger.info('admin initialize: checking');
    UserInfoDal.findByEmail(initDB.defaultAdmin.Email, function(err, user){
      if(err){
        logger.error('There was an error checking the default admin!');
      }
      done(err, user);
    });
  },
  createDocument: function(done){
    logger.info('admin initialize: creating');
    UserInfoDal.create(
      initDB.defaultAdmin.NameCn,
      initDB.defaultAdmin.NameEn,
      initDB.defaultAdmin.Passwd,
      initDB.defaultAdmin.IsAdmin,
      initDB.defaultAdmin.Gender,
      initDB.defaultAdmin.Email,
      '',
      '',
      initDB.defaultAdmin.Remark,
      function(err){
        if(err){
          logger.error('There was an error adding the default admin!');
        }
        done(err);
      }
    )
  },
  deleteDocument: function(done){
    logger.info('admin initialize: deleting');
    UserInfoDal.removeByEmail(initDB.defaultAdmin.Email, function(err){
      if(err){
        logger.error('There was an error removing the default admin!');
      }
      done(err);
    });
  },
  addAdminUser: function(done){
    var ep = new Eventproxy();

    ep.all('initDone', function(initResult){
      initDB.createDocument(function(err){
        if(err){
          return ep.emit('error', err);
        }else{
          done();
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
        initDB.deleteDocument(ep.done('initDone'));
      } else{
        ep.emit('initDone', true)
      }
    })
  }
};

module.exports = initDB;
