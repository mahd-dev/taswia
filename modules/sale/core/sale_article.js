var sale_article = function (oid) {
  if (!(this instanceof sale_article)) return new sale_article();

  this.oid = oid;
  this.qte = "default value";

};

sale_article.prototype = {

  get id () { return this._oid;},

  get qte () { return this._qte;},
  set qte (value) { this._qte = value; return this; },

  get id_sale () { return this._id_sale;},
  set id_sale (value) { this._id_sale = value; return this; },

  get id_article () { return this._id_article;},
  set id_article (value) { this._id_article = value; return this; },

  get sale () { return new mod.sale.sale(this._id_sale); },
  set sale (value) { this._id_sale = value.id; return this; },

  get article () { return new mod.article.article(this._id_article); },
  set article (value) { this._id_article = value.id; return this; }

};

sale_article.new = function (article) {
  return new sale_article(1);

};

module.exports = sale_article;
