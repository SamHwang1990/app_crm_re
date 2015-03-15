/**
 * Created by sam on 15-3-3.
 */

var passport = require('../middleware/auth');
var config = require('../config');

exports.getCurrentUser = function(req, res, next){
  res.status(200).json(req.user);
  res.end();
  return;
};

exports.login = function(req, res, next){
  passport.authenticate('local', function(err, user, info) {
    if(err){
      return next(err);
    }
    if(!user){
      res.status(401).json(info);
      res.end();
      return;
    }
    req.login(user, {}, function(err){
      if(err){
        return next(err);
      }

      if(req.body.rememberMe){
        req.session.cookie.maxAge = config.cookieMaxAge
      }else{
        req.session.cookie.expires = false;
      }

      res.status(200).json(info);
      res.end();
      return;
    });
  })(req, res, next);
};

exports.logout = function(req, res, next){
  req.logout();
  req.session.destroy();
  res.clearCookie(config.session_name, { path: '/' });
  res.status(200).json({
    message:'logout.success'
  });
  res.end();
  return;
};