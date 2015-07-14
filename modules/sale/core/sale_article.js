var sale_article = function (oid) {

  this.oid = oid;
  this.qte = "default value";

};

user.prototype = {

  get id () { return this._oid;},

  get qte () { return this._qte;},
  set qte (value) { this._qte = value; },

  get id_sale () { return this._id_sale;},
  set id_sale (value) { this._id_sale = value; },

  get id_article () { return this._id_article;},
  set id_article (value) { this._id_article = value; },

  get sale () { return new mod.sale.sale(this._id_sale); },
  set sale (value) { this._id_sale = value.id; },

  get article () { return new mod.article.article(this._id_article); },
  set article (value) { this._id_article = value.id; }

};

sale_article.new = function (article) {
  return new sale_article(1);

};

module.exports = sale_article;
