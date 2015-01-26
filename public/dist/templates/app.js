angular.module('templates.app', ['tfboys.tpl.html', 'young.tpl.html']);

angular.module("tfboys.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tfboys.tpl.html",
    "tfboys are too young to naive, aha");
}]);

angular.module("young.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("young.tpl.html",
    "<p>i'm what i am!</p>");
}]);
