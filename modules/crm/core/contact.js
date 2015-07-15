var contact = function (oid) {

  this.oid = oid;
  this.name = "default value";

};

contact.prototype = {

  get id () { return this._oid;},

  get name () { return this._name;},
  set name (value) { this._name = value; },

  get id_company () { return this._id_company;},
  set id_company (value) { this._id_company = value; },

  get company () { return new mod.company.company(this._id_company); },
  set company (value) { this._id_company = value.id; },

  get sales () { return [new mod.sale.sale()]; },
  get sale_orders () { return [new mod.sale.order()]; },
  get sale_refunds () { return [new mod.sale.refund()]; },
  get sale_quotes () { return [new mod.sale.quote()]; },
  get purchases () { return [new mod.purchase.purchase()]; },
  get purchase_orders () { return [new mod.purchase.order()]; },
  get purchase_refunds () { return [new mod.purchase.refund()]; }

};

contact.new = function (company) {
  return new contact(1);
};

module.exports = contact;
