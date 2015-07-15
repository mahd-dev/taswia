// importing modules
mod={};
var fs = require('fs');
var modules_config = JSON.parse(fs.readFileSync('./modules/modules.json', 'utf8'));
var i = 0;
var load_next = function () {
  if(modules_config.modules.length > i){
    var my_module = modules_config.modules[i];
    process.stdout.write(new Date().toISOString() + " : Loading " + my_module.name + " ... ");
    if(my_module.async){
      mod[my_module.name] = require((my_module.entry?my_module.entry.replace('{modules_root}', './modules'):'./modules/' + my_module.name + '/index.js'))(function () {
        if(typeof(mod[my_module.name].init) == 'function') mod[my_module.name].init();
        process.stdout.write(" done\n");
        i+=1;
        load_next();
      });
    }else{
      mod[my_module.name] = require((my_module.entry?my_module.entry.replace('{modules_root}', './modules'):'./modules/' + my_module.name + '/index.js'));
      if(typeof(mod[my_module.name].init) == 'function') mod[my_module.name].init();
      process.stdout.write(" done\n");
      i+=1;
      load_next();
    }
  }else{
    start_modules();
  }
};load_next();

// start imported modules
var start_modules = function () {
  Object.keys(mod).forEach(function (m) { if(typeof(mod[m].start) == 'function') {
    mod[m].start();
  }});
};
