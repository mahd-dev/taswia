var payment = function (oid) {

  this.oid = oid;
};

payment.prototype = {

  get id () { return this._oid;},

  get id_contact () { return this._id_contact;},
  set id_contact (value) { this._id_contact = value; },

  get id_invoice () { return this._id_invoice;},
  set id_invoice (value) { this._id_invoice = value; },

  get id_refund () { return this._id_refund;},
  set id_refund (value) { this._id_refund = value; },

  get contact () { return new mod.crm.contact(this._id_contact); },
  set contact (value) { this._id_contact = value.id; },

  get invoice_sale () { return new mod.sale.invoice(this._id_invoice); },
  get invoice_purchase () { return new mod.purchase.invoice(this._id_invoice); },
  set invoice (value) { this._id_invoice = value.id; },

  get refund () { return new mod.refund.refund(this._id_refund); },
  set refund (value) { this._id_refund = value.id; }

};

payment.new = function () {
  return new payment(1);

};

module.exports = payment;
