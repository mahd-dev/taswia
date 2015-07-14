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
  sale: require("./core/sale.js"),
  sale_article: require("./core/sale_article.js"),
  delivery: require("./core/delivery.js"),
  invoice: require("./core/invoice.js")

};
