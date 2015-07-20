var payment = function (oid) {
  if (!(this instanceof payment)) return new payment();

  this.oid = oid;

};

payment.prototype = {

  get id () { return this._oid;},

  get ref_type () { return this._ref_type;},
  set ref_type (value) { this._ref_type = value; return this; },

  get id_ref () { return this._id_ref;},
  set id_ref (value) { this._id_ref = value; return this; },

  get ref () {
    switch (this._ref_type) {
      case "contact": return new mod.crm.contact(this._id_ref);
        break;
      case "sale_refund": return new mod.sale.refund(this._id_ref);
        break;
      case "sale_invoice": return new mod.sale.invoice(this._id_ref);
        break;
      case "purchase_refund": return new mod.purchase.refund(this._id_ref);
        break;
      case "purchase_invoice": return new mod.purchase.invoice(this._id_ref);
        break;
    }
  },
  set ref (value) { this._ref_type = value; return this; }

};

payment.new = function () {
  return new payment(1);

};

module.exports = payment;
