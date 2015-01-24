/**
 * Created by sam on 15-1-23.
 * API Router for app
 */

var Router = require('koa-router');

var apiRoute = new Router();

// TODO: find out how to solve the situation when the request path can't match the router pattern bellow

apiRoute.get('/test', function* (){
    this.response.body = this.path;
    return;
});


module.exports = apiRoute;