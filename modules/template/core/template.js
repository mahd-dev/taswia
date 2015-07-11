
// constructor function
var template = function (idi) {

  // template variables
  var this.idi = idi;
  var this.name = "default value";

};

// propoerties getters & setters
template.prototype = {

  // read only property
  get idi () {console.log("idi request : " + this.idi); return this.idi;},

  // read & write property
  get name () { return this._name;},
  set name (value) { this._name = value; }

};

// template function
template.prototype.say_hello = function () {
  console.log("Hello, my name is " + this._name);
};

// class variables
template.variable = "default value";

// class function
template.new = function () {
  return new template(1);
};

module.exports = template;
