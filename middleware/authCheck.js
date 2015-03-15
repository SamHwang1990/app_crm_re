/**
 * Created by sam on 15-3-3.
 */

// 用来检查用户是否已登录，如果已登录，则通过，否则，返回401
exports.isAuthenticated = function(req, res, next){
  if(req.user){
    return next();
  }
  res.status(401).json({message: "login.reason.notAuthenticated"});
  res.end();
  return;
};

// 用来检查用户是否已登录，如果没登录，则通过，否则，返回403
exports.isUnauthenticated = function(req, res, next){
  if(!req.user){
    return next();
  }
  res.status(403).json({message: "logout.reason.unAuthenticatedNeed"});
  res.end();
  return;
};
