var chai = require('chai');
var Hapi = require('hapi');
var server;
var pluginConfig = {
  plugin: require('../'),
  options: {
    mongodb_uri: 'mongodb://localhost/hapi_mongoose_test'
  }
};

describe('hapi-mongoose', function() {

  // Create new hapi server before testing
  before(function() {
    server = new Hapi.Server(8081);
  });

  describe('#register()', function() {

    it('should register successfully within hapi', function(done) {
      server.pack.register(pluginConfig, done);
    });

  });

});