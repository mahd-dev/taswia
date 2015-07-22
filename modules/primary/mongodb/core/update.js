module.exports = function (collection, query, update, editor, upsert, multi, writeConcern) {
  if(query._id !== undefined) {
    query["_id._id"] = query._id;
    unset(query._id);
  };
  module.parent.mongodb.collection(collection).update(
    query,
    {
      $inc: {"_id.version": 1}
    },
    {upsert: false, multi: true}
  );

  var data = [];
  module.parent.mongodb.collection(collection).find(query).forEach(function (item) {
    item._id.version = 0;
    item._id.editor = editor;
    data.push(item);
  });
  module.parent.mongodb.collection(collection).insert(
    data,
    {
      writeConcern: writeConcern,
      ordered: ordered
    }
  );

  query["_id.version"] = 0;
  return module.parent.mongodb.collection(collection).update(
    query,
    update,
    {
      upsert: upsert,
      multi: multi,
      writeConcern: writeConcern
    }
  );
};
