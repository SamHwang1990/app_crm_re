/**
 * Created by sam on 15-1-28.
 * app/app.js
 * app module define
 */

angular.module('app', [
  'ui.router',
  'service.locale',
  'templates.app',
  'templates.common',
  'security',
  'dashboard'
]);

angular.module('app').config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
  function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: true
    });
    $urlRouterProvider.otherwise('/dashboard');
    //$routeProvider.otherwise({redirectTo:'/dashboard'});
  }
]);

angular.module('app').run(['securityAuthorization', function(security) {
  security.requireAuthenticatedUser();
}]);






