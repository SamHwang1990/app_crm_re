/**
 * Created by sam on 15-1-28.
 * Auth Router for app
 */

var Router = require('koa-router');

var authRoute = new Router();

authRoute.get('/login', function* (){
    this.response.body = "login";
    return;
});

module.exports = authRoute;
