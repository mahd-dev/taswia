var company = function (oid) {

  this.oid = oid;
  this.name = "default value";

};

company.prototype = {

  get id () { return this._oid;},

  get name () { return this._name;},
  set name (value) { this._name = value; },

  get users () { return [new mod.company.user()]; },
  get articles () { return [new mod.company.article()]; },
  get contacts () { return [new mod.crm.contact()]; },
  get sales () { return [new mod.sale.sale()]; },
  get sale_orders () { return [new mod.sale.order()]; },
  get sale_refunds () { return [new mod.sale.refund()]; },
  get sale_quotes () { return [new mod.sale.quote()]; },
  get purchases () { return [new mod.purchase.purchase()]; },
  get purchase_orders () { return [new mod.purchase.order()]; },
  get purchase_refunds () { return [new mod.purchase.refund()]; }

};

company.new = function () {
  return new company(1);
};

module.exports = company;
