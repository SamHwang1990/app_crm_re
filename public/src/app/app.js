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
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: true
  });
  $routeProvider.otherwise({redirectTo:'/'});
}]);

angular.module('app').run(['securityAuthorization', function(security) {
  security.requireAuthenticatedUser();
}]);






