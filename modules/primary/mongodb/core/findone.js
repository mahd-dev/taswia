module.exports = function (collection, query, fields, options, version, callback) {
  if(version===undefined && query["_id.version"] === undefined) query["_id.version"] = 0;
  else query["_id.version"] = version;
  if(options===undefined) return module.parent.mongodb.collection(collection).findOne(query, fields, callback);
  else return module.parent.mongodb.collection(collection).findOne(query, fields, options, callback);
};
