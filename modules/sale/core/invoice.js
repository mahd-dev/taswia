var invoice = function (oid) {
  if (!(this instanceof invoice)) return new invoice();

  this.oid = oid;
  this.number = "default value";

};

invoice.prototype = {

  get id () { return this._oid;},

  get number () { return this._number;},
  set number (value) { this._number = value; return this; },

  get sales () { return [new mod.sale.sale()]; }

};

invoice.new = function () {
  return new invoice(1);
};

module.exports = invoice;
