var category = function (oid) {
  if (!(this instanceof category)) return new category();

  this.oid = oid;
  this.name = "default value";

};

category.prototype = {

  get id () { return this._oid;},

  get name () { return this._name;},
  set name (value) { this._name = value; return this; },

  get main_gategory () { return new mod.article.category; },
  set main_gategory (value) { this._main_gategory = value.id; return this; },

  get sub_gategory () { return [new mod.article.category]; },

  get articles () { return [new mod.article.article]; }
};

category.prototype.assign_article = function (article) {
  article.category = this;
}

category.new = function () {
  return new category(1);
};

module.exports = category;
