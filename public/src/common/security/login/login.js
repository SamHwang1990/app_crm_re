/**
 * Created by sam on 15-2-6.
 */

angular.module('security.login', [], ['$routeProvider', function($routeProvider){
    $routeProvider.when('/login', {
        templateUrl: 'security/login/login.tpl.html'
    })

}]);
