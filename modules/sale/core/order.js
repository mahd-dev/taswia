var order = function (oid) {

  this.oid = oid;
  this.number = "default value";

};

order.prototype = {

  get id () { return this._oid;},

  get number () { return this._number;},
  set number (value) { this._number = value; },

  get id_company () { return this._id_company;},
  set id_company (value) { this._id_company = value; },

  get id_contact () { return this._id_contact;},
  set id_contact (value) { this._id_contact = value; },

  get company () { return new mod.company.company(this._id_company); },
  set company (value) { this._id_company = value.id; },

  get contact () { return new mod.crm.contact(this._id_contact); },
  set contact (value) { this._id_contact = value.id; },

  get order_articles () { return [new mod.sale.order_article()]; }

};

order.new = function (contact) {
  return new order(1);
};

module.exports = order;
