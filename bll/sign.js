/**
 * Created by sam on 15-3-3.
 */

var passport = require('../middleware/auth');

exports.getCurrentUser = function(req, res, next){
  res.status(200).json(req.user);
  res.end();
  return;
};

exports.login = function(req, res, next){
  console.log('login ing ing')
  passport.authenticate('local', function(err, user, info) {
    if(err){
      return next(err);
    }
    if(!user){
      res.status(401).json(info);
      res.end();
      return;
    }
    res.status(200).json(info);
    res.end();
    return;
  })(req, res, next);
};
