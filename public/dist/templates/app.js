angular.module('templates.app', ['dashboard/dashboard.en-us.tpl.html', 'dashboard/dashboard.zh-cn.tpl.html', 'dashboard/dashboard.zh-hk.tpl.html']);

angular.module("dashboard/dashboard.en-us.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("dashboard/dashboard.en-us.tpl.html",
    "");
}]);

angular.module("dashboard/dashboard.zh-cn.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("dashboard/dashboard.zh-cn.tpl.html",
    "<header class=\"ac-header navbar navbar-default\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"navbar-header\">\n" +
    "            <button class=\"navbar-toggle collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\".ac-navbar-collapse\">\n" +
    "                <span class=\"sr-only\">Toggle navigation</span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "            </button>\n" +
    "            <a class=\"navbar-brand\" href=\"/\">\n" +
    "                <img src=\"/static/imgs/app_logo_h30.png\" alt=\"app crm brand\" />\n" +
    "            </a>\n" +
    "        </div>\n" +
    "        <nav class=\"collapse navbar-collapse ac-navbar-collapse\" role=\"navigation\">\n" +
    "            <ul class=\"nav navbar-nav navbar-left\">\n" +
    "                <li class=\"active\"><a href=\"javascript:void(0)\">所有学生</a> </li>\n" +
    "                <li><a href=\"javascript:void(0)\">销售跟踪</a> </li>\n" +
    "                <li><a href=\"javascript:void(0)\">语言考试跟踪</a> </li>\n" +
    "                <li><a href=\"javascript:void(0)\">申请跟踪</a> </li>\n" +
    "                <li><a href=\"javascript:void(0)\">系统配置</a> </li>\n" +
    "            </ul>\n" +
    "            <ul class=\"nav navbar-nav navbar-right\">\n" +
    "                <li>\n" +
    "                    <a href=\"javascript:void(0)\">\n" +
    "                        <img src=\"/static/imgs/avatar_20x20.jpg\" class=\"avatar_20 img-circle\" alt=\"user avatar\" />\n" +
    "                        samhwang1990\n" +
    "                    </a>\n" +
    "                </li>\n" +
    "                <li><a href=\"javascript:void(0)\">消息提醒</a> </li>\n" +
    "                <li><a href=\"javascript:void(0)\">登出</a> </li>\n" +
    "            </ul>\n" +
    "        </nav>\n" +
    "    </div>\n" +
    "</header>\n" +
    "<div class=\"ac-main\">\n" +
    "    <article class=\"ac-info-jumbotron\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"ac-info-subTitle\">Welcome Back!</div>\n" +
    "            <div class=\"ac-info-avatar\"><img src=\"/static/imgs/avatar_230x230.jpg\" /> </div>\n" +
    "            <div><h1>早上好，黄志源！</h1></div>\n" +
    "            <div class=\"ac-info-controls\">\n" +
    "                <a href=\"javascript:void(0)\" class=\"ac-btn ac-btn-success\">查看个人主页</a>\n" +
    "            </div>\n" +
    "            <p class=\"ac-info-nav\">\n" +
    "                <a href=\"javascript:void(0)\">系统通知</a>\n" +
    "                <a  href=\"javascript:void(0)\">我的吐嘈</a>\n" +
    "            </p>\n" +
    "        </div>\n" +
    "    </article>\n" +
    "    <article class=\"ac-main-block ac-main-block-odd\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"ac-main-block-inside\">\n" +
    "                <h2>\n" +
    "                    系统通知\n" +
    "                    <!--<p>wolegeca</p>-->\n" +
    "                </h2>\n" +
    "                <div class=\"ac-panel-groups\">\n" +
    "                    <div class=\"ac-panel row\">\n" +
    "                        <div class=\"col-md-12 ac-panel-abs\">\n" +
    "                            <div class=\"col-md-9 ac-panel-title\">\n" +
    "                                今天怎么不开心，我说在我的想象中有一双滑板鞋.今天怎么不开心，我说在我的想象中有一双滑板鞋.今天怎么不开心，我说在我的想象中有一双滑板鞋\n" +
    "                            </div>\n" +
    "                            <div class=\"col-md-2 col-md-offset-1 ac-panel-meta\">2015-01-04</div>\n" +
    "                            <div class=\"ac-panel-arrow\">\n" +
    "                                <span class=\"glyphicon glyphicon-chevron-right\"></span>\n" +
    "                            </div>\n" +
    "                            <a class=\"ac-panel-href\" href=\"javascript:void(0)\"></a>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"ac-panel-nav\">\n" +
    "                        <a href=\"javascript:void(0)\" class=\"ac-btn ac-btn-disable\">\n" +
    "                            <span class=\"glyphicon glyphicon-chevron-left\"></span>\n" +
    "                        </a>\n" +
    "                        <a href=\"javascript:void(0)\" class=\"ac-btn ac-btn-success\">\n" +
    "                            <span class=\"glyphicon glyphicon-chevron-right\"></span>\n" +
    "                        </a>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </article>\n" +
    "    <article class=\"ac-main-block ac-main-block-even\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"ac-main-block-inside\">\n" +
    "                <h2>我的吐槽</h2>\n" +
    "                <form role=\"form\" class=\"ac-advice-form\">\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <label class=\"sr-only\" for=\"advice-textarea\">Email address</label>\n" +
    "                        <textarea id=\"advice-textarea\" class=\"form-control\" rows=\"5\" placeholder=\"我的吐槽\"></textarea>\n" +
    "                    </div>\n" +
    "                    <input type=\"button\" class=\"ac-btn ac-btn-success\" value=\"提交吐嘈\" />\n" +
    "                </form>\n" +
    "            </div>\n" +
    "            <div class=\"ac-main-block-inside\">\n" +
    "                <h2>吐嘈历史</h2>\n" +
    "                <div class=\"ac-panel-groups\">\n" +
    "                    <div class=\"ac-panel row\">\n" +
    "                        <div class=\"ac-panel-abs col-md-12\">\n" +
    "                            <div class=\"col-md-9 ac-panel-title\">\n" +
    "                                <span class=\"badge ac-badge-info\">New</span>\n" +
    "                                今天怎么不开心，我说在我的想象中有一双滑板鞋.今天怎么不开心，我说在我的想象中有一双滑板鞋.今天怎么不开心，我说在我的想象中有一双滑板鞋\n" +
    "                            </div>\n" +
    "                            <div class=\"col-md-2 col-md-offset-1 ac-panel-meta\">2015-01-04</div>\n" +
    "                            <div class=\"ac-panel-arrow\">\n" +
    "                                <span class=\"glyphicon glyphicon-chevron-right\"></span>\n" +
    "                            </div>\n" +
    "                            <a class=\"ac-panel-href\" href=\"javascript:void(0)\"></a>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"ac-panel-nav\">\n" +
    "                        <a href=\"javascript:void(0)\" class=\"ac-btn ac-btn-disable\">\n" +
    "                            <span class=\"glyphicon glyphicon-chevron-left\"></span>\n" +
    "                        </a>\n" +
    "                        <a href=\"javascript:void(0)\" class=\"ac-btn ac-btn-success\">\n" +
    "                            <span class=\"glyphicon glyphicon-chevron-right\"></span>\n" +
    "                        </a>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </article>\n" +
    "</div>\n" +
    "<footer class=\"ac-footer\">\n" +
    "    <div class=\"container\">\n" +
    "        <p>Designed and built with all the lovely <a href=\"http://www.appedu.org\" target=\"_blank\">appers</a>.</p>\n" +
    "        <p>Copyright @ 2014-2015</p>\n" +
    "        <p><a class=\"beian_link\" href=\"http://www.miibeian.gov.cn/\" target=\"_blank\">粤ICP备14010098号</a></p>\n" +
    "    </div>\n" +
    "</footer>");
}]);

angular.module("dashboard/dashboard.zh-hk.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("dashboard/dashboard.zh-hk.tpl.html",
    "");
}]);
