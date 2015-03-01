/**
 * Created by sam on 15-2-6.
 */

angular.module('security.login', [])

.config(['$routeProvider', 'LOCALEID', function($routeProvider, localeID){
    var templateUrl = 'security/login/login.' + localeID + '.tpl.html';
    $routeProvider.when('/login', {
      templateUrl: templateUrl,
      controller: 'LoginPageController'
    });
  }]
)

.controller('LoginPageController', ["$scope", function($scope){
    $scope.bodyClass = 'body-login';
  }]
);


