/**
 * Created by sam on 15-3-3.
 */

exports.isAuthenticated = function(req, res, next){
  if(req.user){
    return next();
  }
  res.status(401).json({message: "UserUnauthenticated"});
  res.end();
  return;
};

exports.isUnauthenticated = function(req, res, next){
  if(!req.user){
    return next();
  }
  res.status(403).json({message: "UserAuthenticated"});
  res.end();
  return;
};
