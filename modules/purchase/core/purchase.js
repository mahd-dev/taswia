var purchase = function (oid) {

  this.oid = oid;
  this.number = "default value";

};

purchase.prototype = {

  get id () { return this._oid;},

  get number () { return this._number;},
  set number (value) { this._number = value; },

  get id_company () { return this._id_company;},
  set id_company (value) { this._id_company = value; },

  get id_contact () { return this._id_contact;},
  set id_contact (value) { this._id_contact = value; },

  get id_invoice () { return this._id_invoice;},
  set id_invoice (value) { this._id_invoice = value; },

  get id_recipt () { return this._id_recipt;},
  set id_recipt (value) { this._id_recipt = value; },

  get company () { return new mod.company.company(this._id_company); },
  set company (value) { this._id_company = value.id; },

  get contact () { return new mod.crm.contact(this._id_contact); },
  set contact (value) { this._id_contact = value.id; },

  get invoice () { return new mod.purchase.invoice(this._id_invoice); },
  set invoice (value) { this._id_invoice = value.id; },

  get purchase_articles () { return [new mod.purchase.purchase_article()]; }

};

purchase.new = function (contact) {
  return new purchase(1);
};

module.exports = purchase;
