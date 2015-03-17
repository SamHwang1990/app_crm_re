angular.module('services.i18nNotifications', ['services.notifications', 'services.localizedMessages']);
angular.module('services.i18nNotifications').factory('i18nNotifications', ['localizedMessages', 'notifications', 'Notification', function (localizedMessages, notifications, Notification) {

  var prepareNotification = function(msgKey, type, interpolateParams, otherProperties) {
     return angular.extend({
       message: localizedMessages.get(msgKey, interpolateParams),
       type: type
     }, otherProperties);
  };

  var invokeNotification = function(type, message, delay){
    type = type || "info";
    delay = delay || 2000;

    switch (type){
      case "success":
        Notification.success({message: message, delay: delay});
        break;
      default:
        Notification.info({message: message, delay: delay});
    }
  };

  var invokeNotificationArray = function(notificationArray){
    angular.forEach(notificationArray, function(notification){
      return invokeNotification(notification.type, notification.message, notification.delay || 2000);
    });
  };

  var I18nNotifications = {
    pushSticky:function (msgKey, type, interpolateParams, otherProperties) {
      return notifications.pushSticky(prepareNotification(msgKey, type, interpolateParams, otherProperties));
    },

    // region for angular-route
    pushForCurrentRoute:function (msgKey, type, interpolateParams, otherProperties) {
      return notifications.pushForCurrentRoute(prepareNotification(msgKey, type, interpolateParams, otherProperties));
    },
    pushForNextRoute:function (msgKey, type, interpolateParams, otherProperties) {
      return notifications.pushForNextRoute(prepareNotification(msgKey, type, interpolateParams, otherProperties));
    },
    getRouteCurrent:function () {
      return notifications.getRouteCurrent();
    },
    invokeRouteCurrent: function(){
      return invokeNotificationArray(I18nNotifications.getRouteCurrent());
    },
    // endregion

    // region for angular-ui-router
    pushForCurrentState: function (msgKey, type, interpolateParams, otherProperties) {
      return notifications.pushForCurrentState(prepareNotification(msgKey, type, interpolateParams, otherProperties));
    },
    pushForNextState: function (msgKey, type, interpolateParams, otherProperties) {
      return notifications.pushForNextState(prepareNotification(msgKey, type, interpolateParams, otherProperties));
    },
    getStateCurrent: function () {
      return notifications.getStateCurrent();
    },
    invokeStateCurrent: function(){
      return invokeNotificationArray(I18nNotifications.getStateCurrent());
    },
    // endregion

    remove:function (notification) {
      return notifications.remove(notification);
    }
  };

  return I18nNotifications;
}]);