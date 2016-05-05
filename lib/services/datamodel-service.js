'use strict';

var events = require('events');
var util = require('util');

var Devebot = require('devebot');
var debug = Devebot.require('debug');

var debuglog = debug('datamodel');

var Service = function(params) {
  debuglog(' + constructor begin ...');
  Service.super_.apply(this);

  params = params || {};

  var self = this;
  
  self.logger = params.loggingFactory.getLogger();

  self.getSandboxName = function() {
    return params.sandboxName;
  };
  
  self.getServiceInfo = function() {
    return {};
  };

  debuglog(' - constructor end!');
};

Service.argumentSchema = {
  "id": "datamodelService",
  "type": "object",
  "properties": {
    "sandboxName": {
      "type": "string"
    },
    "sandboxConfig": {
      "type": "object"
    },
    "profileConfig": {
      "type": "object"
    },
    "generalConfig": {
      "type": "object"
    },
    "loggingFactory": {
      "type": "object"
    }
  }
};

util.inherits(Service, events.EventEmitter);

module.exports = Service;
