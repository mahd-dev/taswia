
fs = require('fs');
path = require('path');
var express = require('express');

// import modules
mod = {
  express: express,
  server: express()
};

mod.server.set('port', process.env.PORT || 3000);

fs.readdirSync('modules').filter(function(file) { return fs.statSync(path.join('modules', file)).isDirectory(); }).forEach(function (item) {
  mod[item] = require('./modules/' + item + '/index.js');
  if(typeof(mod[item].init) == 'function') mod[item].init();
});
// start imported modules
Object.keys(mod).forEach(function (m) { if(typeof(mod[m].start) == 'function') mod[m].start() });

// starting server
mod.server.listen(mod.server.get('port'), function(){
  console.log(new Date().toISOString() + ' : Server listening on port ' + mod.server.get('port'));
});
