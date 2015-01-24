/**
 * Created by sam on 15-1-24.
 * app.js test
 */


var app = require('../app');
var request = require('supertest').agent(app.listen());

describe('app.js test', function(){
   it('should status / 200', function(done) {
       request
           .get('/')
           .expect(200, done);
   })
});
