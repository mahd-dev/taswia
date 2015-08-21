var oid = require('mongodb').ObjectID;

var render = function (doc, editor){
  if(doc._id !== undefined) {
    doc._id = {
      _id: doc._id,
      version: 0,
      editor: editor
    };
  }else{
    doc._id = {
      _id: new oid(),
      version: 0,
      editor: editor
    };
  }
}

module.exports = function (collection, docs, editor, options, callback){
  if( Object.prototype.toString.call( docs ) === '[object Array]' ) {
    docs.forEach(function (doc) {
      render(doc, editor);
    });
  }else render(docs, editor);

  return module.parent.mongodb.collection(collection).insert(
    docs,
    options,
    callback
  );
};
