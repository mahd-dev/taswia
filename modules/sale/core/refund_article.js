var refund_article = function (oid) {

  this.oid = oid;
  this.qte = "default value";

};

refund_article.prototype = {

  get id () { return this._oid;},

  get qte () { return this._qte;},
  set qte (value) { this._qte = value; },

  get id_refund () { return this._id_refund;},
  set id_refund (value) { this._id_refund = value; },

  get id_article () { return this._id_article;},
  set id_article (value) { this._id_article = value; },

  get refund () { return new mod.sale.refund(this._id_refund); },
  set refund (value) { this._id_refund = value.id; },

  get article () { return new mod.article.article(this._id_article); },
  set article (value) { this._id_article = value.id; }

};

refund_article.new = function (article) {
  return new refund_article(1);

};

module.exports = refund_article;
