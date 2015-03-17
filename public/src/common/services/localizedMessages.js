angular.module('services.localizedMessages', [])
  .constant('I18N.MESSAGES', {
    "zh-cn":{
      'errors.state.changeError': "系统状态更改出错了！",
      'login.reason.notAuthorized':"亲，权限不够用哦。需要以其他身份登录吗？",
      'login.reason.notAuthenticated':"亲，请先登录系统再继续操作。",
      'logout.reason.unAuthenticatedNeed':"请，请先退出系统再继续操作。",
      'login.error.invalidUserEmail': "登录失败，用户邮箱无效！",
      'login.error.invalidPassword': "登录失败，密码错误！",
      'login.error.serverError': "哎呀，系统出错了，请稍后再操作，或者提交问题给管理员！",
      'login.success': "成功登录系统！",
      'logout.success': "成功退出系统！"
    },
    "zh-hk":{
      'errors.state.changeError': "系統狀態更改出錯了！",
      'login.reason.notAuthorized':"親，權限不夠用哦。需要以其他身份登錄嗎？",
      'login.reason.notAuthenticated':"親，請先登錄系統再繼續操作。",
      'logout.reason.unAuthenticatedNeed':"親，請先退出系統再繼續操作。",
      'login.error.invalidUserEmail': "登錄失敗，用戶郵箱無效！",
      'login.error.invalidPassword': "登錄失敗，密碼錯誤！",
      'login.error.serverError': "哎呀，系統出錯了，請稍後再操作，或者提交問題給管理員！",
      'login.success': "成功登錄系統！",
      'logout.success': "成功退出系統！"
    },
    "en-us":{
      'errors.state.changeError': "Website stage change error!",
      'login.reason.notAuthorized':"You do not have the necessary access permissions.  Do you want to login as someone else?",
      'login.reason.notAuthenticated':"You must be logged in to access this part of the application.",
      'logout.reason.unAuthenticatedNeed':"You must be logged out to continue.",
      'login.error.invalidUserEmail': "Login failed, user email is invalid!",
      'login.error.invalidPassword': "Login failed, password don't match!",
      'login.error.serverError': "There was a problem with authenticating.",
      'login.success': "Login Successfully！",
      'logout.success': "Logout Successfully！"
    }
  })
  .factory('localizedMessages', ['$interpolate', 'I18N.MESSAGES', '$locale', function ($interpolate, i18nMessages, $locale) {

  var handleNotFound = function (msg, msgKey) {
    return msg || '?' + msgKey + '?';
  };

  return {
    get : function (msgKey, interpolateParams) {
      var msg =  i18nMessages[$locale.id][msgKey];
      if (msg) {
        return $interpolate(msg)(interpolateParams);
      } else {
        return handleNotFound(msg, msgKey);
      }
    }
  };
}]);