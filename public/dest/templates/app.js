(function(module) {
try {
  module = angular.module('templates.app');
} catch (e) {
  module = angular.module('templates.app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('public/src/app/tfboys.tpl.html',
    'tfboys are too young to naive');
}]);
})();

(function(module) {
try {
  module = angular.module('templates.app');
} catch (e) {
  module = angular.module('templates.app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('public/src/app/young.tpl.html',
    '<p>i\'m what i am!</p>');
}]);
})();
