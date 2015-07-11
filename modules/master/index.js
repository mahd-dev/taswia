module.exports = {

  // will be started later after loading module
  init: function (argument) {
    // body...
    mod.server.get("/", function (req, res) {
      res.send("hello");
    })
  },

  // will be started after initializing all modules
  start: function (argument) {
    // body...
  },

  stop: function (argument) {
    // body...
  }

};
