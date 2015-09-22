module.exports = {

  init: function () {

    mod.server.router.use(function (req, res, next) {
      if ((req.session && req.session.user) || req.path.indexOf('/public') == 0 || req.path.indexOf('/login') == 0 || req.path.indexOf('socket.io') > -1) {
        next();
      }else res.redirect('/login');
    });

    mod.server.iosync.middleware("", function (url, params, session, next, end) {
      if(session.user || url == "/login") next();
      else mod.server.iosync.redirect("/login", params, session, end);
    });

    mod.server.router.use('/public/assets', mod.server.express.static(__dirname + '/assets'));
    mod.server.router.use('/public/components', mod.server.express.static(__dirname + '/components'));

    require("./home/controller");
    require("./login/controller");
  },
  master: require("./master/controller")

};
