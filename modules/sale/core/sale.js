var sale = function (oid) {
  if (!(this instanceof sale)) return new sale();

  this.oid = oid;

};

sale.prototype = {

  get id () { return this._oid;},

  get id_company () { return this._id_company;},
  set id_company (value) { this._id_company = value; return this; },

  get id_contact () { return this._id_contact;},
  set id_contact (value) { this._id_contact = value; return this; },

  get id_invoice () { return this._id_invoice;},
  set id_invoice (value) { this._id_invoice = value; return this; },

  get id_delivery () { return this._id_delivery;},
  set id_delivery (value) { this._id_delivery = value; return this; },

  get company () { return new mod.company.company(this._id_company); },
  set company (value) { this._id_company = value.id; return this; },

  get contact () { return new mod.crm.contact(this._id_contact); },
  set contact (value) { this._id_contact = value.id; return this; },

  get invoice () { return new mod.sale.invoice(this._id_invoice); },
  set invoice (value) { this._id_invoice = value.id; return this; },

  get sale_articles () { return [new mod.sale.sale_article()]; }

};

sale.new = function (contact) {
  return new sale(1);
};

module.exports = sale;
