module.exports = {

  init: function () {
    mod.server.router.use('/assets', mod.server.express.static(__dirname + '/assets'));

    require("./home/controller");
    require("./login/controller");
  }

};
