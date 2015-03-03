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

.controller('LoginPageController', ["$scope", "$http", "$location", "$log", function($scope, $http, $location, $log){
    var originUser = {
      userEmail: '',
      userPass: '',
      rememberMe: false
    };
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
      return $scope.LoginForm.$dirty && $scope.LoginForm.$valid;
    };
    $scope.save = function(){
      //$scope.user.userPass = $scope.user.userEmail;
      //return $log.log('save invoke');
      $http.post('/auth/login', $scope.user)
        .success(function(data){
          $log.error(data.message);
          $location.path('/dashboard');
        })
        .error(function(data){
          $log.error(data.message);
        });
    };

  }]
);


