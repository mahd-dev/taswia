var quote_article = function (oid) {
  if (!(this instanceof quote_article )) return new quote_article();

  this.oid = oid;
  this.qte = "default value";

};

quote_article.prototype = {

  get id () { return this._oid;},

  get qte () { return this._qte;},
  set qte (value) { this._qte = value; return this; },

  get id_quote () { return this._id_quote;},
  set id_quote (value) { this._id_quote = value; return this; },

  get id_article () { return this._id_article;},
  set id_article (value) { this._id_article = value; return this; },

  get quote () { return new mod.sale.quote(this._id_quote); },
  set quote (value) { this._id_quote = value.id; return this; },

  get article () { return new mod.article.article(this._id_article); },
  set article (value) { this._id_article = value.id; return this; }

};

quote_article.new = function (article) {
  return new quote_article(1);

};

module.exports = quote_article;
