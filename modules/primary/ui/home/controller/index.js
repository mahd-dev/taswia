mod.server.router.use('/public/assets/home', mod.server.express.static(__dirname + '/../public'));

mod.server.router.get("/", function (req, res) {
  if(req.xhr) res.send(mod.server.jade.renderFile(mod.server.path.resolve(__dirname + "/../views/view_1.jade"), {}));
  else res.send(mod.ui.master.encapsulate(mod.server.jade.renderFile(mod.server.path.resolve(__dirname + "/../views/view_1.jade"), {})));
});
