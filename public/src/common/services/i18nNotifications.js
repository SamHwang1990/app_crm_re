angular.module('services.i18nNotifications', ['services.notifications', 'services.localizedMessages']);
angular.module('services.i18nNotifications').factory('i18nNotifications', ['localizedMessages', 'notifications', function (localizedMessages, notifications) {

  var prepareNotification = function(msgKey, type, interpolateParams, otherProperties) {
     return angular.extend({
       message: localizedMessages.get(msgKey, interpolateParams),
       type: type
     }, otherProperties);
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
    // endregion

    remove:function (notification) {
      return notifications.remove(notification);
    }
  };

  return I18nNotifications;
}]);