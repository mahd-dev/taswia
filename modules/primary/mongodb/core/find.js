module.exports = function (collection, query, projection, version) {
  if(version===undefined && query["_id.version"] === undefined) query["_id.version"] = 0;
  else query["_id.version"] = version;
  return module.parent.mongodb[collection].find(query, projection);
};
