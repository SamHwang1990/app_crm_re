/*! app_crm - v0.0.1 - 2015-01-28
 * Copyright (c) 2015 samhwang1990 <samhwang1990@gmail.com> (http://blog.ssyog.com);
 * Licensed 
 */
/**
 * Created by sam on 15-1-28.
 */

angular.module('app', [
    'templates.app',
    'templates.common'
]);
angular.module('templates.app', []);


angular.module('templates.common', ['aha.tpl.html']);

angular.module("aha.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("aha.tpl.html",
    "<form name=\"form\" novalidate class=\"login-form\">\n" +
    "    <div class=\"modal-header\">\n" +
    "        <h4>Sign in</h4>\n" +
    "    </div>\n" +
    "    <div class=\"modal-body\">\n" +
    "        <div class=\"alert alert-warning\" ng-show=\"authReason\">\n" +
    "            {{authReason}}\n" +
    "        </div>\n" +
    "        <div class=\"alert alert-error\" ng-show=\"authError\">\n" +
    "            {{authError}}\n" +
    "        </div>\n" +
    "        <div class=\"alert alert-info\">Please enter your login details</div>\n" +
    "        <label>E-mail</label>\n" +
    "        <input name=\"login\" type=\"email\" ng-model=\"user.email\" required autofocus>\n" +
    "        <label>Password</label>\n" +
    "        <input name=\"pass\" type=\"password\" ng-model=\"user.password\" required>\n" +
    "    </div>\n" +
    "    <div class=\"modal-footer\">\n" +
    "        <button class=\"btn btn-primary login\" ng-click=\"login()\" ng-disabled='form.$invalid'>Sign in</button>\n" +
    "        <button class=\"btn clear\" ng-click=\"clearForm()\">Clear</button>\n" +
    "        <button class=\"btn btn-warning cancel\" ng-click=\"cancelLogin()\">Cancel</button>\n" +
    "    </div>\n" +
    "</form>\n" +
    "");
}]);
