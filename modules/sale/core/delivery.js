var delivery = function (oid) {
  if (!(this instanceof delivery)) return new delivery();

  this.oid = oid;
  this.number = "default value";

};

delivery.prototype = {

  get id () { return this._oid;},

  get number () { return this._number;},
  set number (value) { this._number = value; return this; },

  get id_sale () { return this._id_sale;},
  set id_sale (value) { this._id_sale = value; return this; }

};

delivery.new = function () {
  return new delivery(1);
};

module.exports = delivery;
