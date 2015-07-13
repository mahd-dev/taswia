module.exports = {

  // will be started later after loading module
  init: function (argument) {
    // body...
    mod.server.use('/assets', mod.express.static(__dirname + '/assets'));
    mod.server.get("/", function (req, res) {
      res.sendFile(__dirname + "/home/index.html");
    });

  },

  // will be started after initializing all modules
  start: function (argument) {
    // body...
  },

  stop: function (argument) {
    // body...
  }

};
