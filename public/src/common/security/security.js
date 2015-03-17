/**
 * Created by sam on 15-2-2.
 */

angular.module('security.service', ['security.retryQueue', 'services.i18nNotifications'])

.factory('security', ['$http', '$q', '$state', 'securityRetryQueue', 'i18nNotifications',
    function($http, $q, $state, retryQueue, i18nNotifications){
        var redirect = function(state){
          state = state || 'crm';
          $state.go(state);
        };

        retryQueue.onItemAddedCallbacks.push(function(retryItem){
            // TODO: at some time, the retryItem object will be used
            if(retryQueue.hasMore()){
                service.showLogin();
            }
        });

        var redirectToLogin = function(){
            return $state.go('login');
        };

        // the public api of the services
        var service = {
            getLoginReason: function(){
                return retryQueue.retryReason();
            },

            showLogin: function(){
                //retryQueue.cancelAll();
                redirectToLogin();
            },

            login: function(email, password){
                var request = $http.post('/auth/login', {email: email, passwd: password});
                return request.then(function(response){
                    service.currentUser = response.data.currentUser;
                    return service.isAuthenticated();
                });
            },

            logout: function(redirectTo){
                $http.post('/auth/logout').then(function(response){
                  i18nNotifications.pushForNextState(response.data.message, 'success');
                  service.currentUser = null;
                  redirect(redirectTo);
                })
            },

            currentUser: null,

            requestCurrentUser: function(){
                if(service.isAuthenticated()){
                    return $q.when(service.currentUser);
                }
                return $http.get('/auth/current-user').then(function(response) {
                    service.currentUser = response.data;
                    return service.currentUser;
                });
            },

            isAuthenticated: function(){
                return !!service.currentUser;
            },

            isAdmin: function(){
                return !!(service.currentUser && service.currentUser.isAdmin);
            }
        };

        return service;
    }
]);
