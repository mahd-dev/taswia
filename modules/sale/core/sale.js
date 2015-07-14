var sale = function (oid) {

  this.oid = oid;

};

sale.prototype = {

  get id () { return this._oid;},

  get id_company () { return this._id_company;},
  set id_company (value) { this._id_company = value; },

  get id_contact () { return this._id_contact;},
  set id_contact (value) { this._id_contact = value; },

  get id_invoice () { return this._id_invoice;},
  set id_invoice (value) { this._id_invoice = value; },

  get id_delivery () { return this._id_delivery;},
  set id_delivery (value) { this._id_delivery = value; },

  get company () { return new mod.company.company(this._id_company); },
  set company (value) { this._id_company = value.id; },

  get contact () { return new mod.crm.contact(this._id_contact); },
  set contact (value) { this._id_contact = value.id; },

  get invoice () { return new mod.sale.invoice(this._id_invoice); },
  set invoice (value) { this._id_invoice = value.id; },

  get sale_articles () { return [new mod.sale.sale_article()]; }

};

sale.new = function (contact) {
  return new sale(1);
};

module.exports = sale;
