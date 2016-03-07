'use strict';

var events = require('events');
var util = require('util');

var Service = function(params) {
  Service.super_.call(this);

  params = params || {};

  var self = this;
  
  self.getSandboxName = function() {
    return params.sandboxname;
  };
  
  var sandboxconfig = params.sandboxconfig;
  
  var loggingFactory = params.loggingFactory;
  self.logger = loggingFactory.getLogger();
  
  self.getServiceInfo = function() {
    return {};
  };
};

Service.argumentSchema = {
  "id": "/datastoreService",
  "type": "object",
  "properties": {
    "sandboxname": {
      "type": "string"
    },
    "sandboxconfig": {
      "type": "object"
    },
    "loggingFactory": {
      "type": "object"
    }
  }
};

util.inherits(Service, events.EventEmitter);

module.exports = Service;
