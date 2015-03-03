/**
 * Created by sam on 15-1-28.
 * /middleware/auto.js
 * Set Passport Strategy
 */

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var UserInfoDal = require('../dal').UserInfoDAL;
var crypt = require('../utils/crypt');

passport.use(new LocalStrategy({
    usernameField: 'userEmail',
    passwordField: 'userPass'
  },function(username, password, done){
      if(!username){
          return done(null, false, {message: "UserEmailBlank"});
      }

      UserInfoDal.findByEmail(username, function(err, user){
          if(err){
              return done(err, null);
          }

          if(!user){
              return done(null, false, {message: "UserEmailUnknown"});
          }

          if(!crypt.bcompare(password, user.Passwd)){
              return done(null, false, {message: 'UserPasswordWrong'});
          }

          return done(null, user, {message: 'UserAuthenticateSuccess'});
      });
    }
));

passport.serializeUser(function(user, done){
   done(null, user._id);
});

passport.deserializeUser(function(userId, done){
    UserInfoDal.findById(userId, function(err, user){
        if(err){
            return done(err, null);
        }
        delete  user.Passwd;
        done(null, user);
    });
});

module.exports = passport;