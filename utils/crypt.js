/**
 * Created by sam on 15-2-13.
 */

var crypto = require('crypto');
var bcrypt = require('bcrypt');
var fs = require('fs');
var path = require('path');

var getServerKey = function(){
  var pem = fs.readFileSync(path.join(__dirname, 'server.pem'));
  var key = pem.toString('ascii');
  return key;
};

exports.md5 = function(str){
  var md5sum = crypto.createHmac('md5', getServerKey());
  md5sum.update(str);
  str = md5sum.digest('hex');
  return str;
};

exports.sha1 = function(str){
  var hmacSum = crypto.createHmac('sha1', getServerKey());
  hmacSum.update(str);
  str = hmacSum.digest('hex');
  return str;
};

exports.decrypt = function(str, secret) {
  var decipher = crypto.createDecipher('aes192', secret);
  var dec = decipher.update(str, 'hex', 'utf8');
  dec += decipher.final('utf8');
  return dec;
};

exports.encrypt = function(str, secret) {
  var cipher = crypto.createCipher('aes192', secret);
  var enc = cipher.update(str, 'utf8', 'hex');
  enc += cipher.final('hex');
  return enc;
};

exports.bhash = function(str){
  return bcrypt.hashSync(str, 10);
};

exports.bcompare = function(str, hash, callback){
  return bcrypt.compareSync(str, hash);
};