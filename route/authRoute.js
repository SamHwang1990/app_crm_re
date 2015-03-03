/**
 * Created by sam on 15-1-28.
 * Auth Router for app
 */

var express = require('express');

var auth = require('../middleware/authCheck');
var sign = require('../bll/sign');

var authRoute = express.Router();

authRoute.route(['/current-user']).get(sign.getCurrentUser);

authRoute.post('/login', auth.isUnauthenticated, sign.login);

module.exports = authRoute;
