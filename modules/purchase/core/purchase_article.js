var purchase_article = function (oid) {
  if (!(this instanceof purchase_article)) return new purchase_article();

  this.oid = oid;
  this.qte = "default value";

};

purchase_article.prototype = {

  get id () { return this._oid;},

  get qte () { return this._qte;},
  set qte (value) { this._qte = value; return this; },

  get id_purchase () { return this._id_purchase;},
  set id_purchase (value) { this._id_purchase = value; return this; },

  get id_article () { return this._id_article;},
  set id_article (value) { this._id_article = value; return this; },

  get purchase () { return new mod.purchase.purchase(this._id_purchase); },
  set purchase (value) { this._id_purchase = value.id; return this; },

  get article () { return new mod.article.article(this._id_article); },
  set article (value) { this._id_article = value.id; return this; }

};

purchase_article.new = function (article) {
  return new purchase_article(1);

};

module.exports = purchase_article;
