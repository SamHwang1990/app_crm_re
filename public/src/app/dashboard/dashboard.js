/**
 * Created by sam on 15-3-1.
 */

angular.module('dashboard', [])

.config(['$routeProvider', 'LOCALEID', function($routeProvider, localeID){
    var templateUrl = 'dashboard/dashboard.' + localeID + '.tpl.html';

    $routeProvider.when('/dashboard', {
      templateUrl: templateUrl
    })
  }]
)

.controller('DashboardCtrl', ['$scope', function($scope){
    $scope.bodyClass = 'ac-body';
  }]
)
