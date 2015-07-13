var article = function (oid) {

  this.oid = oid;
};

article.prototype = {

  get id () { return this._oid;},

  get name () { return this._name;},
  set name (value) { this._name = value; },

  get is_service () { return this._is_service;},
  set is_service (value) { this._is_service = value; },

  get number () { return this._number;},
  set number (value) { this._number = value; },

  get image () { return this._image;},
  set image (value) { this._image = value; },

  get allow_manufacturing () { return this._allow_manufacturing;},
  set allow_manufacturing (value) { this._allow_manufacturing = value; },

  get allow_purchase () { return this._allow_purchase;},
  set allow_purchase (value) { this._allow_purchase = value; },

  get allow_sale () { return this._allow_sale;},
  set allow_sale (value) { this._allow_sale = value; },

  get barcode () { return this._barcode;},
  set barcode (value) { this._barcode = value; },

  get barcode_encryption () { return this._barcode_encryption;},
  set barcode_encryption (value) { this._barcode_encryption = value; },

  get id_company () { return this._id_company;},
  set id_company (value) { this._id_company = value; },

  get id_category () { return this._id_category;},
  set id_category (value) { this._id_category = value; },

  get category () { return new mod.article.category(this._id_category); },
  set category (value) { this._id_category = value.id; }
};

article.new = function (company) {
  return new article(1);
};

module.exports = article;
