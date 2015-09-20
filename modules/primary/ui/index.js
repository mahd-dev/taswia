module.exports = {

  init: function () {

    mod.server.router.use(function (req, res, next) {
      if ((req.session && req.session.user) || req.path.indexOf('/public') == 0 || req.path.indexOf('/login') == 0 || req.path.indexOf('socket.io') > -1) {
        next();
      }else res.redirect('/login');
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

    mod.server.router.use('/public/assets', mod.server.express.static(__dirname + '/assets'));
    mod.server.router.use('/public/components', mod.server.express.static(__dirname + '/components'));

    require("./home/controller");
    require("./login/controller");
  },
  master: require("./master/controller")

};
