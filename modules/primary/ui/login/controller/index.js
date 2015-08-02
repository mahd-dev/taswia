var fs = require('fs');
module.tr = JSON.parse(fs.readFileSync(__dirname + '/translation.json', 'utf8'));



mod.server.router.use('/assets/login', mod.server.express.static(__dirname + '/../public'));

mod.server.router.get("/login", function (req, res) {
  if (req.session && req.session.user) res.redirect('/');
  else res.render(__dirname + "/../views/view_1", {tr: module.tr["en"]});
});

mod.server.router.post("/login", function (req, res) {
  mod.db.findone("user", { username: req.body.username }, [], [], 0, function (err, user){
    if (err == null) {
      if (user) {
        if (req.body.password == user.password) {
          req.session.user = user;
          res.send({"err": false, params: {goto: "/"}});
        }else res.send({"err": {password: "not_exist"}});
      }else res.send({"err": {username: "not_exist"}});
    }else res.send({"err":err});
  });
});

mod.server.router.get("/logout", function (req, res) {
  req.session.destroy();
  res.redirect('/login');
});
