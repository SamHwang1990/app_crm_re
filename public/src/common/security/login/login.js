/**
 * Created by sam on 15-2-6.
 */

angular.module('security.login', [], ['$routeProvider', '$rootScope', function($routeProvider, $rootScope){

    // TODO: judge whether the user is login or logout
  var templateUrl = 'security/login/login.' + $rootScope.local + '.tpl.html';
  $routeProvider.when('/login', {
    templateUrl: templateUrl,
    controller: 'LoginPageController'
  })
}])

.controller('LoginPageController', ["$scope", function($scope){
    $scope.bodyClass = 'body-login';
  }]
);


