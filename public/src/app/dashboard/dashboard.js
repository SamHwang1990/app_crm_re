/**
 * Created by sam on 15-3-1.
 */

angular.module('dashboard', ['security.service'])

.config(['$stateProvider', function($stateProvider){
    var templateUrl = 'dashboard/dashboard.tpl.html';
    $stateProvider.state('dashboard', {
      url: '/dashboard',
      templateUrl: templateUrl,
      controller: 'DashboardCtrl'
    });
  }]
)

.controller('DashboardCtrl', ['$scope', 'security', function($scope, security){
    $scope.bodyClass = 'ac-body';
    $scope.logout = security.logout;

    $scope.isNavCollapse = true;

  }]
);
