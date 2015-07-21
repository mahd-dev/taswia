module.exports = {

  init: function () {
    mod.server.router.use('/assets', mod.server.express.static(__dirname + '/assets'));
    mod.server.router.get("/", function (req, res) {
      res.sendFile(__dirname + "/home/index.html");
    });

    require("./login/controller");
  }

};
