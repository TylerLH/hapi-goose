// hapi-mongoose
// --------------
// Mongoose ORM adapter for hapi.js
// Author: Tyler Hughes <iampbt@gmail.com>

var mongoose = require('mongoose');

// Connect to database
function connect(cb) {
  plugin.log(['info', 'mongoose'], 'Connecting to database: ' + options.mongodb_uri);
  mongoose.connect(function(err) {
    if (err) {
      cb(err);
    } else {
      cb();
    };
  })
};

// Disconnect from database
function disconnect() {
  mongoose.disconnect();
};

exports.register = function(plugin, options, next) {
  var db = mongoose.connect(options.mongodb_uri);
  plugin.expose('instance', mongoose);
  plugin.expose('connect', connect);
  plugin.expose('disconnect', disconnect);
  connect(function(err) {
    if (err) {
      plugin.log(['info', 'mongoose'], 'Error connecting to database: ' + options.mongodb_uri);
      next(err);
    } else {
      plugin.log(['info', 'mongoose'], 'Connected to database: ' + options.mongodb_uri);
      next();
    }
  })
};

exports.register.attributes = {
  pkg: require('./package.json')
};