/**
 * Created by sam on 15-2-6.
 */

angular.module('security.login', [])

.config(['$stateProvider', function($stateProvider){
    var templateUrl = 'security/login/login.tpl.html';
    $stateProvider.state('login', {
      url: "/login",
      templateUrl: templateUrl,
      controller: 'LoginPageController'
    });
  }]
)

.controller('LoginPageController', ["$scope", "$http", "$location", "$log", 'i18nNotifications',
    function($scope, $http, $location, $log, i18nNotifications){
      $scope.$on('$viewContentLoaded', function(event){
        event.preventDefault();
        i18nNotifications.invokeStateCurrent();
      });

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
        $http.post('/auth/login', $scope.user)
          .success(function(data){
            $log.info(data.message);
            $location.path('/dashboard');
          })
          .error(function(data){
            $log.info(data.message);
          });
      };
    }
  ]
);


