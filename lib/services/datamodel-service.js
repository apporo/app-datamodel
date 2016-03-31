'use strict';

var events = require('events');
var util = require('util');

var debuglog = require('devebot').debug('datamodel');

var Service = function(params) {
  debuglog(' + constructor begin ...');
  Service.super_.apply(this);

  params = params || {};

  var self = this;
  
  self.logger = params.loggingFactory.getLogger();

  self.getSandboxName = function() {
    return params.sandboxname;
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
    "sandboxname": {
      "type": "string"
    },
    "sandboxconfig": {
      "type": "object"
    },
    "profileconfig": {
      "type": "object"
    },
    "generalconfig": {
      "type": "object"
    },
    "loggingFactory": {
      "type": "object"
    }
  }
};

util.inherits(Service, events.EventEmitter);

module.exports = Service;
