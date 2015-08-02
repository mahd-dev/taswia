var fs = require('fs');
path = require('path');

module.tr = JSON.parse(fs.readFileSync(__dirname + '/translation.json', 'utf8'));

mod.server.router.use('/assets/polymer', mod.server.express.static(__dirname + '/../public'));

mod.server.router.get("/polymer", function (req, res) {
  res.sendFile(path.resolve(__dirname + "/../views/view_1.html"));
});
