/**
 * Created by sam on 15-2-6.
 */

angular.module('security.authorization',['security.service', 'security.retryQueue'])

.factory('securityAuthorization', ['security', 'securityRetryQueue', function(security, queue){
        var service = {
            requireAuthenticatedUser: function(){
                var promise = security.requestCurrentUser().then(function(userInfo){
                    if(!security.isAuthenticated()){
                        return queue.pushRetryFn('unauthenticated-client', service.requireAuthenticatedUser);
                    };
                });
                return promise;
            }
        };

        return service;
    }]);