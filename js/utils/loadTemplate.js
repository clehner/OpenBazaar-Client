'use strict';

var __ = require('underscore'),
    fs = require('fs'),
    path = require('path'),
    templateHelpers = require('./templateHelpers');

module.exports = function(templateFile, callback){
  var templates = require('../templates'),
      file = templates[path.relative('./js/templates', templateFile)],
      compiledTmpl,
      wrappedTmpl;
  
  __.templateSettings.variable = "ob";
  compiledTmpl = __.template(file);

  wrappedTmpl = function(context) {
    var mergedContext = __.extend({}, templateHelpers, context || {});

    return compiledTmpl(mergedContext); 
  };
  
  callback(wrappedTmpl);
};