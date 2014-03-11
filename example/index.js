'use strict';

var duration = require('..');

for (var i = 0; i < 10; i++) {
  run(i);
}

function run(i) {
  duration.start('task' + i);
  var random = Math.random() * 100 * i;
  setTimeout(function() {
    console.log('count ' + i + ' end ' + random + ' ' + duration.end('task' + i));
  }, random);
}
