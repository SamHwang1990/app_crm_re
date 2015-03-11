/**
 * Created by sam on 15-3-1.
 */

angular.module('dashboard', [])

.config(['$stateProvider', function($stateProvider){
    var templateUrl = 'dashboard/dashboard.tpl.html';
    $stateProvider.state('dashboard', {
      url: '/dashboard',
      templateUrl: templateUrl,
      controller: 'DashboardCtrl'
    });
  }]
)

.controller('DashboardCtrl', ['$scope', function($scope){
    $scope.bodyClass = 'ac-body';
  }]
);
