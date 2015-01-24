/**
 * Created by sam on 15-1-23.
 * Get Locate value from url path or request.headers.accept-languages
 * For i18n use
 */


var config = require('../config');
var i18nSupport = config.i18nSupport;

var getLocate = function(){
    var locate;
    var _getLocateFromPath = function(path){
        var pathReg = /\/([a-zA-Z0-9\-_\.]+)\/?.*/i;
        var pathMatch, pathI18n;

        pathMatch = pathReg.exec(path);
        if(!pathMatch){
            return '';
        }

        pathI18n = pathMatch[1].toLowerCase();
        if(i18nSupport.support.indexOf(pathI18n) === -1){
            return '';
        }

        return pathI18n;
    };

    var _getLocateFromHeader = function(acceptLanguages){
        var langMatch = '',
            acceptLangLength,
            i = 0,
            currentLang;

        if(!acceptLanguages){
            return '';
        }

        acceptLangLength = acceptLanguages.length;
        // get the first accept-language type which is supported by system
        for(i; i<acceptLangLength;i++){
            currentLang = acceptLanguages[i].toLowerCase();
            if(i18nSupport.support.indexOf(currentLang) === -1){
                continue;
            }
            langMatch = currentLang;
            break;
        }
        return langMatch;
    };

    return {
        getLocateFromPath: _getLocateFromPath,
        getLocateFromHeader: _getLocateFromHeader,
        getLocate: function(path, acceptLanguages){
            locate = _getLocateFromPath(path);
            if(!locate){
                locate = _getLocateFromHeader(acceptLanguages);
            }
            if(!locate){
                locate = i18nSupport.default;
            }
            return locate;
        }
    }
};

module.exports = getLocate;