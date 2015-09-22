mod.server.router.use('/public/assets/login', mod.server.express.static(__dirname + '/../public'));

mod.server.router.get("/login", function (req, res) {
  res.send(mod.ui.master.encapsulate(mod.server.jade.renderFile(mod.server.path.resolve(__dirname + "/../views/view_1.jade"))));
});

mod.server.iosync.query("/login", function (params, session, callback) {
  callback({
    content: mod.server.jade.renderFile(mod.server.path.resolve(__dirname + "/../views/view_1.jade"))
  });
});

mod.server.iosync.on('login', function (data, session, callback) {
  mod.db.findone("user", { username: data.username }, [], [], 0, function (err, user){
    if (err == null) {
      if (user) {
        if (data.password == user.password) {
          callback({
            user: {
              id: user._id,
              privileges: user.privileges
            },
            client_params: {
              redirect: "/"
            }
          });
        } else callback({error: "invalid_password"});
      } else callback({error: "username_not_exist"});
    } else callback({error: "unhandled"});
  });
});
mod.server.iosync.on('logout', function (session, callback) {
  callback({client_params: {redirect: "/login"}});
});
