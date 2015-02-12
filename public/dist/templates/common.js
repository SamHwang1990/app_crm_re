angular.module('templates.common', ['aha.tpl.html', 'security/login/login.tpl.html']);

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

angular.module("security/login/login.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("security/login/login.tpl.html",
    "<div class=\"login-main\">\n" +
    "    <header class=\"login-main-header navbar navbar-default\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"navbar-header\">\n" +
    "                <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#login-navbar-collapse\">\n" +
    "                    <span class=\"sr-only\">Toggle navigation</span>\n" +
    "                    <span class=\"icon-bar\"></span>\n" +
    "                    <span class=\"icon-bar\"></span>\n" +
    "                    <span class=\"icon-bar\"></span>\n" +
    "                </button>\n" +
    "                <a class=\"navbar-brand\" href=\"#\">\n" +
    "                    <img src=\"/static/assets/imgs/login_brand.jpg\" alt=\"app crm brand\" />\n" +
    "                </a>\n" +
    "            </div>\n" +
    "\n" +
    "            <nav class=\"collapse navbar-collapse\" role=\"navigation\" id=\"login-navbar-collapse\">\n" +
    "                <ul class=\"nav navbar-nav navbar-right\">\n" +
    "                    <li><a href=\"/\">申博首页</a></li>\n" +
    "                    <li><a href=\"/\">申博案例</a></li>\n" +
    "                    <li><a href=\"/\">帮助</a></li>\n" +
    "                    <li><a href=\"/\">提供建议</a></li>\n" +
    "                </ul>\n" +
    "            </nav>\n" +
    "        </div>\n" +
    "    </header>\n" +
    "    <div class=\"login-main-body\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div class=\"col-sm-12 login-crm-logo\" alt=\"app-crm-logo\"></div>\n" +
    "                    <div class=\"col-sm-12 login-crm-statement\">\n" +
    "                        <h1>申博教育客户关系管理系统</h1>\n" +
    "                        <p>专业的评估+全面的规划=名校录取</p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <form class=\"login-form\">\n" +
    "                        <div class=\"input-group\">\n" +
    "                            <span class=\"input-group-addon\"><span class=\"glyphicon glyphicon-user\"></span></span>\n" +
    "                            <label class=\"sr-only\" for=\"login-user-account\">Username or Email</label>\n" +
    "                            <input type=\"text\" id=\"login-user-account\" class=\"form-control\" placeholder=\"Username or Email\">\n" +
    "                        </div>\n" +
    "                        <div class=\"input-group\">\n" +
    "                            <span class=\"input-group-addon\"><span class=\"glyphicon glyphicon-lock\"></span></span>\n" +
    "                            <label class=\"sr-only\" for=\"login-user-password\">User Password</label>\n" +
    "                            <input type=\"password\" id=\"login-user-password\" class=\"form-control\" placeholder=\"Password\">\n" +
    "                        </div>\n" +
    "                        <div class=\"login-toolbar clearfix\">\n" +
    "                            <div class=\"pull-left\">\n" +
    "                                <label>\n" +
    "                                    <input type=\"checkbox\" value=\"\" id=\"login-store-status\"> 七天免登录\n" +
    "                                </label>\n" +
    "                            </div>\n" +
    "                            <p class=\"pull-right\">\n" +
    "                                <a href=\"javascript:void(0);\">忘记密码？</a>\n" +
    "                            </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"login-submit row\">\n" +
    "                            <div class=\"col-xs-6 login-submit-btn\">\n" +
    "                                <button class=\"login-submit-reset login-submit-btn-active\">\n" +
    "                                    <span class=\"glyphicon glyphicon-refresh\"></span>\n" +
    "                                </button>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-xs-6 login-submit-btn\">\n" +
    "                                <button class=\"login-submit-submit\">\n" +
    "                                    <span class=\"glyphicon glyphicon-log-in\"></span>\n" +
    "                                </button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </form>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <footer class=\"login-main-footer\">\n" +
    "        <div class=\"container\">\n" +
    "            <p>Designed and built with all the lovely <a href=\"http://www.appedu.org\" target=\"_blank\">appers</a>.</p>\n" +
    "            <p>Copyright @ 2014-2015</p>\n" +
    "            <p><a class=\"beian_link\" href=\"http://www.miibeian.gov.cn/\" target=\"_blank\">粤ICP备14010098号</a></p>\n" +
    "        </div>\n" +
    "    </footer>\n" +
    "</div>");
}]);
