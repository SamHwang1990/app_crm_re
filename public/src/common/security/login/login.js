/**
 * Created by sam on 15-2-6.
 */

angular.module('security.login', [], ['$routeProvider', function($routeProvider){

    // TODO: judge whether the user is login or logout

    $routeProvider.when('/login', {
        templateUrl: 'security/login/login.tpl.html',
        controller: 'LoginPageController'
    })
}])

.controller('LoginPageController', ["$scope", function($scope){
        $scope.bodyClass = 'body-login';
    }]);


