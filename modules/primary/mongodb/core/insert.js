var oid = require('mongodb').ObjectID;

module.exports = function (collection, document, editor, writeConcern, ordered){
  if(document._id !== undefined) {
    document._id = {
      _id: document._id,
      version: 0,
      editor: editor
    };
  }else{
    document._id = {
      _id: new oid(),
      version: 0,
      editor: editor
    };
  }

  return module.parent.mongodb[collection].insert(
    document,
    {
      writeConcern: writeConcern,
      ordered: ordered
    }
  );
};
