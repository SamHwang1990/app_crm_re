/**
 * Created by sam on 15-1-28.
 * app/app.js
 * app module define
 */

angular.module('app', [
  'ngRoute',
  'templates.app',
  'templates.common',
  'security',
  'services.getLocal'
]);

angular.module('app').config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider.otherwise({redirectTo:'/'});
}]);

angular.module('app').run(['securityAuthorization', '$rootElement', '$rootScope', function(security, $rootElement, $rootScope) {
  var baseElement = $rootElement.find('base');
  $rootScope.locale = baseElement.attr('href').slice(1, -1);
  security.requireAuthenticatedUser();
}]);






