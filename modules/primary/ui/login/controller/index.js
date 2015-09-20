mod.server.router.use('/public/assets/login', mod.server.express.static(__dirname + '/../public'));

mod.server.router.get("/login", function (req, res) {
  if (req.session && req.session.user) res.redirect('/');
  else {
    if(req.xhr) res.send(mod.server.jade.renderFile(mod.server.path.resolve(__dirname + "/../views/view_1.jade")));
    else res.send(mod.ui.master.encapsulate(mod.server.jade.renderFile(mod.server.path.resolve(__dirname + "/../views/view_1.jade"))));
  }
});
