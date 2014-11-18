// hapi-goose
// --------------
// Mongoose ORM adapter for hapi.js
// Author: Tyler Hughes <iampbt@gmail.com>

var mongoose = require('mongoose');

exports.register = function(plugin, options, next) {
  // Connect to database
  function connect(cb) {
    plugin.log(['info', 'mongoose'], 'Connecting to database: ' + options.mongodb_uri);
    mongoose.connect(options.mongodb_uri, function(err) {
      if (err) {
        plugin.log(['info', 'mongoose'], 'Error connecting to database: ' + options.mongodb_uri);
        cb(err);
      } else {
        plugin.log(['info', 'mongoose'], 'Connected to database: ' + options.mongodb_uri);
        cb();
      };
    });
  };

  // Disconnect from database
  function disconnect() {
    mongoose.disconnect();
    plugin.log(['info', 'mongoose'], 'Disconnected from database: ' + options.mongodb_uri);
  };

  plugin.expose('instance', mongoose);
  plugin.expose('connect', connect);
  plugin.expose('disconnect', disconnect);
  connect(function(err) {
    if (err) {
      next(err);
    } else {
      next();
    };
  });
};

exports.register.attributes = {
  pkg: require('./package.json')
};