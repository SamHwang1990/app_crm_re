/**
 * Created by sam on 15-1-28.
 * /middleware/auto.js
 * Set Passport Strategy
 */

var passport = require('koa-passport');
var LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(function(username, password, done){
        var tempUser = {
            username: 'Sam',
            password: 'aha',
            email: 'samhwang1990@gmail.com'
        };

        if(!username){
            return done(null, false, {message: "username is blank!"});
        }
        if(username !== tempUser.username){
            return done(null, false, {message: "unknown user name!"});
        }
        if(password !== tempUser.password){
            return done(null, false, {message: 'password do not match!'});
        }
        return done(null, tempUser);
    }
));

passport.serializeUser(function(user, done){
   done(null, user);
});

passport.deserializeUser(function(user, done){
   done(null, user);
});

module.exports = passport;