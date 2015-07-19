module.exports = {

  init: function () {
    mod.server.router.use('/assets', mod.server.express.static(__dirname + '/assets'));
    mod.server.router.get("/", function (req, res) {
      res.sendFile(__dirname + "/home/index.html");
    });
    mod.server.router.get("/test", function (req, res) {
      res.sendFile(__dirname + "/home/test.html");
    });
  }

};
