module.server = require('http');
module.express = require('express');
module.bodyParser = require('body-parser');
module.cookieParser = require('cookie-parser');
module.session = require('express-session');
module.mongoStore = require('connect-mongo')(module.session);
module.iosync = require('iosync');

module.app = module.express();
module.server = module.server.Server(module.app);
module.router = module.express.Router();
module.app.use(module.bodyParser.json());
module.app.use(module.bodyParser.urlencoded({ extended: true }));
module.app.use(module.cookieParser());
module.session = module.session({
  resave: true,
  saveUninitialized: true,
  store: new module.mongoStore({db: mod.db.mongodb}),
  secret: require('crypto').randomBytes(64).toString("hex")
});
module.app.use(module.session);
module.iosync = module.iosync({
  server: module.server,
  session: module.session
});
module.router.get("/iosync/iosync.js", function (req, res) {
  res.sendFile(require.resolve("iosync/client.js"));
});
module.router.get("/iosync/json-patch.js", function (req, res) {
  res.sendFile(require.resolve("iosync/node_modules/fast-json-patch/dist/json-patch-duplex.min.js"));
})

var fs = require('fs');
try {
  var config = JSON.parse(fs.readFileSync(__dirname + '/config.json', 'utf8'));
} catch (e) {
  var config = {};
}
module.app.set('port', process.env.PORT || config.port || 8175);
module.app.use(module.router);
module.app.set('view engine', 'jade');

module.exports = {
  start: function () {
    module.server.listen(module.app.get('port'), function(){
      console.log(new Date().toISOString() + ' : Server listening on port ' + module.app.get('port'));
    });
  },
  express: module.express,
  app: module.app,
  router: module.router
};
