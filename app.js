
fs = require('fs');
path = require('path');

// import libraries
lib = {};
fs.readdirSync('lib').filter(function(file) { return fs.statSync(path.join('lib', file)).isDirectory(); }).forEach(function (item) {
  require('./lib/' + item + '/index.js');
});

// import modules
mod = {};
fs.readdirSync('modules').filter(function(file) { return fs.statSync(path.join('modules', file)).isDirectory(); }).forEach(function (item) {
  mod[item] = require('./modules/' + item + '/index.js');
  if(typeof(mod[item].init) == 'function') mod[item].init();
});
// start imported modules
Object.keys(mod).forEach(function (m) { if(typeof(mod[m].start) == 'function') mod[m].start() });




// test
var a = modules.template.template.new();
a.name = "Mohamed";
a.id = 2;

var b = new modules.template.template(2);
b.name="med";

a.say_hello();
console.log(a.id);
console.log(a.name);

console.log(b.name);
