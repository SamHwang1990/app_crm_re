/**
 * Created by sam on 15-1-28.
 * app/app.js
 * app module define
 */

angular.module('app', [
    'ngRoute',
    'templates.app',
    'templates.common',
    'security'
]);

angular.module('app').config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.otherwise({redirectTo:'/'});
}]);

angular.module('app').run(['security', function(security) {
    security.requestCurrentUser();
}]);





