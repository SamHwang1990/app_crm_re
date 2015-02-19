/**
 * Created by sam on 15-2-16.
 */

var sinon = require('sinon');

var initDB = require('../../config/initDB');
var UserInfoDal = require('../../dal/UserInfoDAL');


describe('initDB Module Test', function(){
  describe('#addAdminUser()', function(){
    var checkSpy, createSpy, deleteSyp, addAdminSpy;

    /*checkSpy = sinon.spy(initDB, 'checkDocument');
    createSpy = sinon.spy(initDB, 'createDocument');
    deleteSpy = sinon.spy(initDB, 'deleteDocument');*/

    it('CheckDocument should be called no matter what', function(done){
      checkSpy = sinon.spy(initDB, 'checkDocument');

      initDB.addAdminUser(function(){
        checkSpy.called.should.be.true;
        initDB.checkDocument.restore();
        done();
      });

    });

    describe('if default admin is not existed', function(){

      before(function(){
        checkSpy = sinon.stub(initDB, 'checkDocument', function(callback){
          callback(null, null);
        });
        deleteSyp = sinon.spy(initDB, 'deleteDocument');
        createSpy = sinon.spy(initDB, 'createDocument');
      });

      after(function(){
        initDB.checkDocument.restore();
        initDB.createDocument.restore();
        initDB.deleteDocument.restore();
      });

      it('DeleteDocument should not be called, but createDocument should be called', function(done){
        initDB.addAdminUser(function(){
          deleteSyp.called.should.be.false;
          createSpy.called.should.be.true;
          done();
        })
      });
    });

    describe('if default admin is existed', function(){

      before(function(){
        checkSpy = sinon.stub(initDB, 'checkDocument', function(callback){
          callback(null, initDB.defaultAdmin);
        });
        deleteSyp = sinon.spy(initDB, 'deleteDocument', function(callback){
          callback(null);
        });
        createSpy = sinon.spy(initDB, 'createDocument', function(callback){
          callback(null);
        });
      });

      after(function(){
        initDB.checkDocument.restore();
        initDB.createDocument.restore();
        initDB.deleteDocument.restore();
      });

      it('DeleteDocument should be called, and then, CreateDocument should be called', function(done){
        initDB.addAdminUser(function(){
          deleteSyp.called.should.be.true;
          createSpy.called.should.be.true;
          deleteSyp.calledBefore(createSpy).should.be.true;
          done();
        })
      });
    });
  });
});