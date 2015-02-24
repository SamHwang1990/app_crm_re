/**
 * Created by sam on 15-2-24.
 */

angular.module('services.getLocal', []).factory('getLocal', function(){
  return function(locationPath, locationAbsUrl){
    var path = locationPath.split('/');
    var absUrl = locationAbsUrl.split('/');
    var localIndex = absUrl.indexOf(path[1]) -1;
    var local = absUrl[localIndex];
    return local;
  };
});