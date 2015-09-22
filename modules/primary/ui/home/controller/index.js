mod.server.router.use('/public/assets/home', mod.server.express.static(__dirname + '/../public'));

mod.server.router.get("/", function (req, res) {
 res.send(mod.ui.master.encapsulate(mod.server.jade.renderFile(mod.server.path.resolve(__dirname + "/../views/view_1.jade"))));
});

mod.server.iosync.query("/", function (params, session, callback) {
  callback({
    content: mod.server.jade.renderFile(mod.server.path.resolve(__dirname + "/../views/view_1.jade"))
  });
});
