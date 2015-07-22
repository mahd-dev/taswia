var fs = require('fs');
module.tr = JSON.parse(fs.readFileSync(__dirname + '/translation.json', 'utf8'));



mod.server.router.use('/assets/login', mod.server.express.static(__dirname + '/../public'));

mod.server.router.get("/login", function (req, res) {
  res.render(__dirname + "/../views/view_1", {tr: module.tr["en"]});
});

mod.server.router.post("/login", function (req, res) {
  mod.db.findone("user", { username: req.body.username }, [], [], 0, function (err, user){
    if (err == null) {
      if (user) {
        if (req.body.password == user.password) {
          req.session.user = user;
          res.send({"err": false});
        }
      }
    }else res.send({"err":err});
  });
});

mod.server.router.post("/logout", function (req, res) {
  req.session.destroy();
});
