var quote_article = function (oid) {

  this.oid = oid;
  this.qte = "default value";

};

quote_article.prototype = {

  get id () { return this._oid;},

  get qte () { return this._qte;},
  set qte (value) { this._qte = value; },

  get id_quote () { return this._id_quote;},
  set id_quote (value) { this._id_quote = value; },

  get id_article () { return this._id_article;},
  set id_article (value) { this._id_article = value; },

  get quote () { return new mod.sale.quote(this._id_quote); },
  set quote (value) { this._id_quote = value.id; },

  get article () { return new mod.article.article(this._id_article); },
  set article (value) { this._id_article = value.id; }

};

quote_article.new = function (article) {
  return new quote_article(1);

};

module.exports = quote_article;
