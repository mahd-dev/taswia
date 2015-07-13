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
  get contacts () { return [new mod.crm.contact()]; }
};

company.new = function () {
  return new company(1);
};

module.exports = company;
