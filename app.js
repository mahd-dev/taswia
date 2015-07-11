
fs = require('fs');
path = require('path');

// import modules
mod = {
  express: require('express')
};
fs.readdirSync('mod').filter(function(file) { return fs.statSync(path.join('mod', file)).isDirectory(); }).forEach(function (item) {
  mod[item] = require('./mod/' + item + '/index.js');
  if(typeof(mod[item].init) == 'function') mod[item].init();
});
// start imported mods
Object.keys(mod).forEach(function (m) { if(typeof(mod[m].start) == 'function') mod[m].start() });



// test
var a = mod.template.template.new();
a.name = "Mohamed";

var b = new mod.template.template(2);
a.idi = 3;

console.log(a.idi);
console.log(b.name);
