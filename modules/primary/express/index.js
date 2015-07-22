module.express = require('express');
module.bodyParser = require('body-parser');
module.cookieParser = require('cookie-parser');
module.session = require('express-session');
module.mongoStore = require('connect-mongo')(module.session);

module.app = module.express();
module.router = module.express.Router();

module.app.use(module.bodyParser.json());
module.app.use(module.bodyParser.urlencoded({ extended: true }));
module.app.use(module.cookieParser());
module.app.use(module.session({
  resave: true,
  saveUninitialized: true,
  store: new module.mongoStore({db: mod.db.mongodb}),
  secret: require('crypto').randomBytes(64).toString("hex")
}));

var fs = require('fs');
try {
  var config = JSON.parse(fs.readFileSync(__dirname + '/config.json', 'utf8'));
} catch (e) {}
module.app.set('port', process.env.PORT || (config?config.port:null) || 8175);
module.app.use(module.router);
module.app.set('view engine', 'jade');

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
