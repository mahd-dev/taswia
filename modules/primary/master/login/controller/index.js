var fs = require('fs');
module.tr = JSON.parse(fs.readFileSync(__dirname + '/translation.json', 'utf8'));

mod.server.router.use('/login/public', mod.server.express.static(__dirname + '/../public'));

mod.server.router.get("/login", function (req, res) {
  res.render(__dirname + "/../views/view_1", {tr: module.tr["en"]});
});

mod.server.router.post("/login", function (req, res) {
  console.log(req.body);
  ///res.send(req.params.username);
  /*var t = mod.db.find("user", { username: req.username }, {_id: 1, password: 1});
  if (t.count()) {
    if (req.password == t.next().password) {
      res.send({"success":true});
    }
  }*/
});
