(function(module) {
try {
  module = angular.module('templates.common');
} catch (e) {
  module = angular.module('templates.common', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('public/src/common/aha.tpl.html',
    '<form name="form" novalidate class="login-form">\n' +
    '    <div class="modal-header">\n' +
    '        <h4>Sign in</h4>\n' +
    '    </div>\n' +
    '    <div class="modal-body">\n' +
    '        <div class="alert alert-warning" ng-show="authReason">\n' +
    '            {{authReason}}\n' +
    '        </div>\n' +
    '        <div class="alert alert-error" ng-show="authError">\n' +
    '            {{authError}}\n' +
    '        </div>\n' +
    '        <div class="alert alert-info">Please enter your login details</div>\n' +
    '        <label>E-mail</label>\n' +
    '        <input name="login" type="email" ng-model="user.email" required autofocus>\n' +
    '        <label>Password</label>\n' +
    '        <input name="pass" type="password" ng-model="user.password" required>\n' +
    '    </div>\n' +
    '    <div class="modal-footer">\n' +
    '        <button class="btn btn-primary login" ng-click="login()" ng-disabled=\'form.$invalid\'>Sign in</button>\n' +
    '        <button class="btn clear" ng-click="clearForm()">Clear</button>\n' +
    '        <button class="btn btn-warning cancel" ng-click="cancelLogin()">Cancel</button>\n' +
    '    </div>\n' +
    '</form>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('templates.common');
} catch (e) {
  module = angular.module('templates.common', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('public/src/common/cao.tpl.html',
    '<p>if i were a boy~~~</p>');
}]);
})();
