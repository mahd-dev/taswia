module.exports = function (collection, query, editor, options, callback) {
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
    function (err, collection) {
      if(!err){
        var data = [];
        module.parent.mongodb.collection(collection).find(query).forEach(function (item) {
          data.push({_id:{_id: item._id, version: 0, editor: editor}});
        });

        module.parent.mongodb.collection(collection).insert(
          data,
          options,
          callback
        );
      }else callback(err);
    }
  );


};
