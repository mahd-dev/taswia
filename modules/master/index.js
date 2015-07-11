module.exports = {

  // will be started later after loading module
  init: function (argument) {
    // body...
    console.log(__dirname + '/assets');
    mod.server.use('/assets',mod.express.static(__dirname + '/assets'));
    mod.server.get("/", function (req, res) {
      res.send("hello");
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
