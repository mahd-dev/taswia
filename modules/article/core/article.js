var article = function (oid) {
  if (!(this instanceof article)) return new article();

  this.oid = oid;
};

article.prototype = {

  get id () { return this._oid;},

  get name () { return this._name;},
  set name (value) { this._name = value; return this; },

  get is_service () { return this._is_service;},
  set is_service (value) { this._is_service = value; return this; },

  get number () { return this._number;},
  set number (value) { this._number = value; return this; },

  get image () { return this._image;},
  set image (value) { this._image = value; return this; },

  get allow_manufacturing () { return this._allow_manufacturing;},
  set allow_manufacturing (value) { this._allow_manufacturing = value; return this; },

  get allow_purchase () { return this._allow_purchase;},
  set allow_purchase (value) { this._allow_purchase = value; return this; },

  get allow_sale () { return this._allow_sale;},
  set allow_sale (value) { this._allow_sale = value; return this; },

  get barcode () { return this._barcode;},
  set barcode (value) { this._barcode = value; return this; },

  get barcode_encryption () { return this._barcode_encryption;},
  set barcode_encryption (value) { this._barcode_encryption = value; return this; },

  get id_company () { return this._id_company;},
  set id_company (value) { this._id_company = value; return this; },

  get id_category () { return this._id_category;},
  set id_category (value) { this._id_category = value; return this; },

  get category () { return new mod.article.category(this._id_category); },
  set category (value) { this._id_category = value.id; return this; },

  get sale_articles () { return [new mod.sale.sale_article()]; },
  get sale_order_articles () { return [new mod.sale.order_article()]; },
  get sale_refund_articles () { return [new mod.sale.refund_article()]; },
  get sale_quote_articles () { return [new mod.sale.quote_article()]; },
  get purchase_articles () { return [new mod.purchase.purchase_article()]; },
  get purchase_order_articles () { return [new mod.purchase.order_article()]; },
  get purchase_refund_articles () { return [new mod.purchase.refund_article()]; }

};

article.new = function (company) {
  return new article(1);
};

module.exports = article;
