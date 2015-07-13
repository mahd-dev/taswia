var user = function (oid) {

  this.oid = oid;
};

user.prototype = {

  get id () { return this._oid;},

  get fname () { return this._fname;},
  set fname (value) { this._fname = value; },

  get lname () { return this._lname;},
  set lname (value) { this._lname = value; },

  get image () { return this._image;},
  set image (value) { this._image = value; },

  get rem_login_try () { return this._rem_login_try;},
  set rem_login_try (value) { this._rem_login_try = value; },

  get role () { return this._role;},
  set role (value) { this._role = value; },

  get tel () { return this._tel;},
  set tel (value) { this._tel = value; },

  get username () { return this._username;},
  set username (value) { this._username = value; },

  get password () { return this._password;},
  set password (value) { this._password = value; },

  get id_company () { return this._id_company;},
  set id_company (value) { this._id_company = value; },

  get company () { return new mod.company.company(this._id_company); },
  set company (value) { this._id_company = value.id; }

};

user.new = function (company) {
  return new user(1);

};

module.exports = user;
