/**
 * Created by sam on 15-1-28.
 * app/app.js
 * app module define
 */

angular.module('app', [
  'ngRoute',
  'service.locale',
  'templates.app',
  'templates.common',
  'security',
  'dashboard'
]);

angular.module('app').config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider.otherwise({redirectTo:'/'});
}]);

angular.module('app').run(['securityAuthorization', '$rootElement', '$rootScope', function(security, $rootElement, $rootScope) {
  var local = $rootElement.attr('data-local');
  $rootScope.local = local;
  security.requireAuthenticatedUser();
}]);






