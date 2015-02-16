/**
 * Created by sam on 15-2-16.
 */

var sinon = require('sinon');

var initDB = require('../../config/initDB');
var UserInfoDal = require('../../dal/UserInfoDAL');


describe('initDB Module Test', function(){
  describe('#addAdminUser()', function(){
    var checkSpy, createSpy, deleteSyp;

    checkSpy = sinon.spy(initDB, 'checkDocument');
    createSpy = sinon.spy(initDB, 'createDocument');
    deleteSyp = sinon.spy(initDB, 'deleteDocument');


    it('CheckDocument should be called no matter what', function(done){
      initDB.addAdminUser(done);
      checkSpy.called.should.be.true;
    });

    describe('if default admin is not existed', function(){
      beforeEach(function(done){
        checkSpy = sinon.spy(initDB, 'checkDocument', function(){
          done(null, null);
        });
      });

      it('DeleteDocument should not be called', function(done){
        initDB.addAdminUser(done);
        deleteSyp.called.should.be.true;
      });
      it('CreateDocument should be called', function(done){
        initDB.addAdminUser(done);
        createSpy.called.should.be.true;
      });
    });

    describe('if default admin is existed', function(){
      it('DeleteDocument should be called', function(done){

      });
      it('CreateDocument should be called after DeleteDocument was called', function(done){

      });
    });
  });
});