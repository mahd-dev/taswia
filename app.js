
fs = require('fs');
path = require('path');

// import libraries
lib = {};
fs.readdirSync('lib').filter(function(file) { return fs.statSync(path.join('lib', file)).isDirectory(); }).forEach(function (item) {
  lib[item] = require('./lib/' + item + '/index.js');
  if(typeof(lib[item].init) == 'function') lib[item].init();
});
// start imported libs
Object.keys(lib).forEach(function (m) { if(typeof(lib[m].start) == 'function') lib[m].start() });




// test
var a = lib.template.template.new();
a.name = "Mohamed";

var b = new lib.template.template(2);
a.idi = 3;

console.log(a.idi);
console.log(b.name);
