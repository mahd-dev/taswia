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
  set company (value) { this._id_company = value.id; }
};

contact.new = function (company) {
  return new contact(1);
};

module.exports = contact;
