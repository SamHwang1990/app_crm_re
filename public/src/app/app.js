/**
 * Created by sam on 15-1-28.
 * app/app.js
 * app module define
 */

angular.module('app', [
  'ui.router',
  'ui.bootstrap',
  'ui-notification',
  'service.locale',
  'templates.app',
  'templates.common',
  'services.i18nNotifications',
  'security',
  'dashboard'
]);

angular.module('app').config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
  function ($stateProvider, $urlRouterProvider, $locationProvider, LocaleId) {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: true
    });
    $urlRouterProvider.otherwise('/');
    //$routeProvider.otherwise({redirectTo:'/dashboard'});
  }
]);

angular.module('app').run(['securityAuthorization', '$rootScope', 'LOCALEID', function(security, $rootScope, LOCALEID) {
  $rootScope.homeHref = '/' + LOCALEID;
  security.requireAuthenticatedUser();
}]);

angular.module('app').controller('AppCtrl', ['$scope', 'i18nNotifications', function($scope, i18nNotifications){
  $scope.notification = i18nNotifications;
  $scope.removeNotification = function(notification){
    i18nNotifications.removeNotification(notification);
  };

  $scope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error){
    event.preventDefault();
    i18nNotifications.pushForCurrentState('errors.state.changeError', 'error');
  })
}]);






