(function(module) {
try {
  module = angular.module('templates.app');
} catch (e) {
  module = angular.module('templates.app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('tfboys.tpl.html',
    'tfboys are too young to naive, aha');
}]);
})();

(function(module) {
try {
  module = angular.module('templates.app');
} catch (e) {
  module = angular.module('templates.app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('young.tpl.html',
    '<p>i\'m what i am!</p>');
}]);
})();
