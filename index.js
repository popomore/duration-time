'use strict';

var prettyHrtime = require('pretty-hrtime');
var running = {};

exports.start = function(name) {
  if (running[name]) {
    running[name].update();
  } else {
    running[name] = new Duration();
  }
};

exports.end = function(name) {
  if (!running[name]) return '';
  var result = running[name].end();
  delete running[name];
  return result;
};

function Duration() {
  this.hrduration = process.hrtime();
}

Duration.prototype.end = function(options) {
  return prettyHrtime(process.hrtime(this.hrduration), options || {});
};

Duration.prototype.update = function() {
  this.hrduration = process.hrtime();
};
