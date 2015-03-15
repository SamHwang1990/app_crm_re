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
          return done(null, false, {message: "login.error.invalidUserEmail"});
      }

      UserInfoDal.findByEmail(username, function(err, user){
          if(err){
              return done(err, null, {message: "login.error.serverError"});
          }

          if(!user){
              return done(null, false, {message: "login.error.invalidUserEmail"});
          }

          if(!crypt.bcompare(password, user.Passwd)){
              return done(null, false, {message: 'Login.error.invalidPassword'});
          }

          return done(null, user, {message: 'login.success'});
      });
    }
));

passport.serializeUser(function(user, done){
   done(null, user._id);
});

passport.deserializeUser(function(userId, done){
    UserInfoDal.findByIdSave(userId, function(err, user){
        if(err){
            return done(err, null);
        }
        done(null, user);
    });
});

module.exports = passport;