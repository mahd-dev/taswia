var fs = require('fs');
module.tr = JSON.parse(fs.readFileSync(__dirname + '/translation.json', 'utf8'));

mod.server.router.use('/login/public', mod.server.express.static(__dirname + '/../public'));

mod.server.router.get("/login", function (req, res) {
  res.render(__dirname + "/../views/view_1", {tr: module.tr["en"]});
});

mod.server.router.post("/login", function (req, res) {
  console.log(req.body);
  var user = mod.db.find("user", { username: req.body.username }, {_id: 1, password: 1});
  if (user.count()) {
    if (req.body.password == user.next().password) {
      res.send({"success":true});
    }
  }
});
