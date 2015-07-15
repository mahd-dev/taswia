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
  //
  get purchases () { return [new mod.company.purchase()]; },
  get refunds () { return [new mod.company.refund()]; },
  get quotes () { return [new mod.company.quote()]; },
  get orders () { return [new mod.company.order()]; }

};

company.new = function () {
  return new company(1);
};

module.exports = company;
