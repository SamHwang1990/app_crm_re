/**
 * Created by sam on 15-1-28.
 * Auth Router for app
 */

var Router = require('koa-router');
var passport = require('../middleware/auth');

var authRoute = new Router();

authRoute.get('/current-user', function* (){
    var that = this;
    this.status = 200;
    this.body = {
        currentUser: that.req.user
    };
});

authRoute.post('/login', function* (){
    var that = this;
    passport.authenticate('local', function(err, user, info){

    })
});

module.exports = authRoute;
