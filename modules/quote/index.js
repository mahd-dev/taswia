module.exports = {

  // will be started later after loading module
  init: function (argument) {
    // body...
  },

  // will be started after initializing all modules
  start: function (argument) {
    // body...
  },

  stop: function (argument) {
    // body...
  },

  // public classes
  quote: require("./core/quote.js"),
  quote_article: require("./core/quote_article.js")

};
