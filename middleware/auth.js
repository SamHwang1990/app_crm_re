/**
 * Created by sam on 15-1-28.
 * /middleware/auto.js
 * Set Passport Strategy
 */

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var UserInfoDal = require('../dal').UserInfoDAL;

passport.use(new LocalStrategy(function(userEmail, password, done){

        if(!userEmail){
            return done(null, false, {message: "user email is blank!"});
        }

        UserInfoDal.findByEmail(userEmail, function(err, user){
            if(err){
                return done(err, null);
            }

            if(!user){
                return done(null, false, {message: "unknown user email!"});
            }

            if(password !== user.Passwd){
                return done(null, false, {message: 'password do not match!'});
            }

            return done(null, user);
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