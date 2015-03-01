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
    var originUser = {};
    $scope.bodyClass = 'body-login';
    $scope.user = angular.copy(originUser);
    $scope.canRevert = function(){
      return !angular.equals($scope.user, originUser);
    };
    $scope.revert = function(){
      $scope.user = angular.copy(originUser);
      $scope.LoginForm.$setPristine();
    };
    $scope.canSave = function(){
      return false;
    };
    $scope.save = function(){
      $scope.user.userPass = $scope.user.userEmail;
    };

  }]
);


