var fs = require('fs');
module.tr = JSON.parse(fs.readFileSync(__dirname + '/translation.json', 'utf8'));

mod.server.router.use('/assets/home', mod.server.express.static(__dirname + '/../public'));

mod.server.router.get("/", function (req, res) {
  res.render(__dirname + "/../views/view_1", {tr: module.tr["en"]});
});
