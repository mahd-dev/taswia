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
  invoice: require("./core/invoice.js"),
  order: require("./core/order.js"),
  order_article: require("./core/order_article.js"),
  refund: require("./core/refund.js"),
  refund_article: require("./core/refund_article.js"),
  quote: require("./core/quote.js"),
  quote_article: require("./core/quote_article.js")

};
