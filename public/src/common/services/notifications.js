angular.module('services.notifications', ['ui-notification']).factory('notifications', ['$rootScope', function ($rootScope) {

  var notifications = {
    'STICKY' : [],
    // for angular-route
    'ROUTE_CURRENT' : [],
    'ROUTE_NEXT' : [],
    // for angular-ui-router
    'STATE_CURRENT': [],
    'STATE_NEXT': []
  };
  var notificationsService = {};

  var addNotification = function (notificationsArray, notificationObj) {
    if (!angular.isObject(notificationObj)) {
      throw new Error("Only object can be added to the notification services");
    }
    notificationsArray.push(notificationObj);
    return notificationObj;
  };

  // region notification for angular-route
  $rootScope.$on('$routeChangeSuccess', function () {
    notifications.ROUTE_CURRENT.length = 0;

    notifications.ROUTE_CURRENT = angular.copy(notifications.ROUTE_NEXT);
    notifications.ROUTE_NEXT.length = 0;
  });

  notificationsService.getRouteCurrent = function(){
    return [].concat(notifications.STICKY, notifications.ROUTE_CURRENT);
  };

  notificationsService.pushSticky = function(notification) {
    return addNotification(notifications.STICKY, notification);
  };

  notificationsService.pushForCurrentRoute = function(notification) {
    return addNotification(notifications.ROUTE_CURRENT, notification);
  };

  notificationsService.pushForNextRoute = function(notification) {
    return addNotification(notifications.ROUTE_NEXT, notification);
  };

  // endregion

  // region notification for angular-ui-router
  $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    //event.preventDefault();
    if(!fromState.name){
      return;
    }
    notifications.STATE_CURRENT.length = 0;

    notifications.STATE_CURRENT = angular.copy(notifications.STATE_NEXT);
    notifications.STATE_NEXT.length = 0;
  });

  notificationsService.getStateCurrent = function(){
    return [].concat(notifications.STICKY, notifications.STATE_CURRENT);
  };

  notificationsService.pushForCurrentState = function(notification){
    return addNotification(notifications.STATE_CURRENT, notification);
  };

  notificationsService.pushForNextState = function(notification){
    return addNotification(notifications.STATE_NEXT, notification);
  };
  // endregion

  notificationsService.remove = function(notification){
    angular.forEach(notifications, function (notificationsByType) {
      var idx = notificationsByType.indexOf(notification);
      if (idx>-1){
        notificationsByType.splice(idx,1);
      }
    });
  };

  notificationsService.removeAll = function(){
    angular.forEach(notifications, function (notificationsByType) {
      notificationsByType.length = 0;
    });
  };

  return notificationsService;
}]);