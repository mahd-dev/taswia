var order_article = function (oid) {

  this.oid = oid;
  this.qte = "default value";

};

order_article.prototype = {

  get id () { return this._oid;},

  get qte () { return this._qte;},
  set qte (value) { this._qte = value; },

  get id_order () { return this._id_order;},
  set id_order (value) { this._id_order = value; },

  get id_article () { return this._id_article;},
  set id_article (value) { this._id_article = value; },

  get order () { return new mod.purchase.order(this._id_order); },
  set order (value) { this._id_order = value.id; },

  get article () { return new mod.article.article(this._id_article); },
  set article (value) { this._id_article = value.id; }

};

order_article.new = function (article) {
  return new order_article(1);

};

module.exports = order_article;
