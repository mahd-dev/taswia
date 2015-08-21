module.exports = function (collection, query, update, editor, options, callback) {
  if(query._id !== undefined) {
    query["_id._id"] = query._id;
    unset(query._id);
  };
  module.parent.mongodb.collection(collection).update(
    query,
    {
      $inc: {"_id.version": 1}
    },
    {upsert: false, multi: true},
    function (err, doc) {
      if(!err){
        var data = [];
        module.parent.mongodb.collection(collection).find(query).forEach(function (item) {
          item._id.version = 0;
          item._id.editor = editor;
          data.push(item);
        });
        module.parent.mongodb.collection(collection).insert(
          data,
          options,
          function (err, doc) {
            if(!err){
              query["_id.version"] = 0;
              module.parent.mongodb.collection(collection).update(
                query,
                update,
                options,
                callback
              );
            }else callback(err);
          }
        );
      }else callback(err);
    }
  );


};
