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
  purchase: require("./core/purchase.js"),
  purchase_article: require("./core/purchase_article.js"),
  recipt: require("./core/recipt.js"),
  invoice: require("./core/invoice.js"),
  order: require("./core/order.js"),
  order_article: require("./core/order_article.js"),
  refund: require("./core/refund.js"),
  refund_article: require("./core/refund_article.js")

};
