/**
 * Created by sam on 15-1-23.
 * test for '../../utils/getLocate.js'
 */

var should = require('should');
var sinon = require('sinon');

var getLocateModule = require('../../utils/getLocate')();

describe('GetLocate Module Test', function(){

    var i18nSupport = ["zh-cn","zh-hk","en-us"];
    var i18nDefault = "zh-cn";

    describe('#getLocateFromPath()', function(){
        var requestPath = '';
        it('return string.empty when request / ', function(){
            requestPath = '/';
            getLocateModule.getLocateFromPath(requestPath).should.equal('');
        });

        it('return string.empty when request /nomatch ', function(){
            requestPath = '/noi18nmatch';
            getLocateModule.getLocateFromPath(requestPath).should.equal('');
        });

        it('return matching i18n when request path is matching i18n support', function(){
            var i18nSupportLength = i18nSupport.length;
            var i = 0;
            for (i;i < i18nSupportLength; i++){
                requestPath = '/' + i18nSupport[i];
                getLocateModule.getLocateFromPath(requestPath).should.equal(i18nSupport[i]);
            }
        })
    });

    describe('#getLocateFromHeader()', function(){
        var acceptLangs;
        it('return string.empty when langs is blank', function(){
            acceptLangs = [];
            getLocateModule.getLocateFromHeader(acceptLangs).should.equal('');
        });

        it('return string.empty when langs is string.empty', function(){
            acceptLangs = undefined;
            getLocateModule.getLocateFromHeader(acceptLangs).should.equal('');
        });

        it('return string.empty when langs is undefined', function(){
            acceptLangs = undefined;
            getLocateModule.getLocateFromHeader(acceptLangs).should.equal('');
        });

        it('return string.empty when langs is null', function(){
            acceptLangs = null;
            getLocateModule.getLocateFromHeader(acceptLangs).should.equal('');
        });

        it('return string.empty when not langs match', function(){
            acceptLangs = ["fr-en", "aha"];
            getLocateModule.getLocateFromHeader(acceptLangs).should.equal('');
        });

        it('return the lang which is the only matching lang', function(){
            acceptLangs = ['zh-cn', "aha"];
            getLocateModule.getLocateFromHeader(acceptLangs).should.equal('zh-cn');
        });

        it('return the lang which is the first one when there have one matching lang', function(){
            acceptLangs = ['zh-hk', 'en-us'];
            getLocateModule.getLocateFromHeader(acceptLangs).should.equal('zh-hk');
        });

        it('return the matching lang which will be lowercase even with the lang is uppercase', function(){
            acceptLangs = ['En-Us', 'fr-en'];
            getLocateModule.getLocateFromHeader(acceptLangs).should.equal('en-us');
        });
    });

    describe('#getLocate()', function(){
        var path = '',
            acceptLangs;

        it('return the matching locate from path', function(){
            path = '/zh-hk';
            acceptLangs = [];
            getLocateModule.getLocate(path, acceptLangs).should.equal('zh-hk');
        });

        it('return the matching locate from accept-languages', function(){
            path = '/fr-en';
            acceptLangs = ['zh-hk', 'fr-en'];
            getLocateModule.getLocate(path, acceptLangs).should.equal('zh-hk');
        });

        it('return default locate when no match is return from path and accept-langs', function(){
            path = '/fr-en';
            acceptLangs = ['fr-en', 'aha'];
            getLocateModule.getLocate(path, acceptLangs).should.equal(i18nDefault);
        });

        it('return the locate from path when path and accept-langs both have matching locates', function(){
            path = '/en-us';
            acceptLangs = ['zh-cn', 'zh-hk'];
            getLocateModule.getLocate(path, acceptLangs).should.equal('en-us');
        });
    });
});
