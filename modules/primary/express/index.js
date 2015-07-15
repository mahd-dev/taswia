module.express = require('express');
module.app = module.express();
module.router = module.express.Router();

var fs = require('fs');
try {
  var config = JSON.parse(fs.readFileSync(__dirname + '/config.json', 'utf8'));
} catch (e) {}
module.app.set('port', process.env.PORT || (config?config.port:null) || 8175);
module.app.use(module.router);

module.exports = {
  start: function () {
    module.app.listen(module.app.get('port'), function(){
      console.log(new Date().toISOString() + ' : Server listening on port ' + module.app.get('port'));
    });
  },
  express: module.express,
  app: module.app,
  router: module.router
};
