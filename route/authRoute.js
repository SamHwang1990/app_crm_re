/**
 * Created by sam on 15-1-28.
 * Auth Router for app
 */

var Router = require('koa-router');

var authRoute = new Router();

authRoute.get('/current-user', function* (){
    this.status = 200;
    this.body = {
        currentUser: 'sam'
    };
});

module.exports = authRoute;
