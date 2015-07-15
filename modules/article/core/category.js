var category = function (oid) {

  this.oid = oid;
  this.name = "default value";

};

category.prototype = {

  get id () { return this._oid;},

  get name () { return this._name;},
  set name (value) { this._name = value; },

  get main_gategory () { return new mod.article.category; },
  set main_gategory (value) { this._main_gategory = value.id; },

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
