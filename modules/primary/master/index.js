module.exports = {

  init: function () {
    mod.server.router.use(function (req, res, next) {
      if ((req.session && req.session.user) || req.path.indexOf('/assets') == 0 || req.path.indexOf('/login') == 0) {
        next();
      }else res.redirect('/login');
    });
    mod.server.router.use('/assets', mod.server.express.static(__dirname + '/assets'));

    require("./home/controller");
    require("./login/controller");
  }

};
