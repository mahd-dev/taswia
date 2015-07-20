
// --- importing modules --- //
mod={};
// read modules list
var fs = require('fs');
var modules_config = JSON.parse(fs.readFileSync('./modules/modules.json', 'utf8'));

// loop on modules found
var i = 0;
var load_next = function () {
  if(modules_config.modules.length > i){ // there is more modules to load
    var my_module = modules_config.modules[i]; // select module config
    process.stdout.write(new Date().toISOString() + " : Loading " + my_module.name + " ... ");
    if(my_module.async_init){ // the module contains async functions, so we have to wait for them to finish
      mod[my_module.name] = require(( // add module's public results to main modules object
        my_module.entry? // modules's config provides an entry file
        my_module.entry.replace('{modules_root}', './modules') // so start it
        :'./modules/' + my_module.name) // else we start a predefined entry
      )(function () { // this function will be provided to mdule's entry as a callback, so it will run our callback after it finishes it's job
          if(typeof(mod[my_module.name].init) == 'function') mod[my_module.name].init(); // run module's inti function if it's neccesary
          process.stdout.write(" done\n");
          i+=1;
          load_next(); // forward to next module
        });
    }else{ // run module normally
      mod[my_module.name] = require((  // add module's public results to main modules object, but this time without providing callback function
        my_module.entry?
        my_module.entry.replace('{modules_root}', './modules')
        :'./modules/' + my_module.name)
      );
      if(typeof(mod[my_module.name].init) == 'function') mod[my_module.name].init(); // run module's inti function if it's neccesary
      process.stdout.write(" done\n");
      i+=1;
      load_next(); // forward to next module
    }
  }else{ // all modules was loaded
    start_modules();
  }
};
load_next(); // start loading modules

// --- start imported modules --- //
var start_modules = function () {
  Object.keys(mod).forEach(function (m) { if(typeof(mod[m].start) == 'function') mod[m].start(); });
};
