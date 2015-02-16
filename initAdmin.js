/**
 * Created by sam on 15-2-16.
 */

var initDB = require('./config/initDB');

initDB.initialize();
initDB.addAdminUser(function(){});
