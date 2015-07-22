
module.exports = function (callback) {
  var fs = require('fs');
  try {
    var config = JSON.parse(fs.readFileSync(__dirname + '/config.json', 'utf8'));
  } catch (e) {}

  var MongoClient = require('mongodb').MongoClient;
  var url = (config?config.connect:null) || 'mongodb://localhost:27017/taswia';

  MongoClient.connect(url, function (err, rslt_db) {
    if(err){
      console.log('Error connecting to database : ' + err);
      process.exit(-1);
    }else{
      if(mod.db){
        module.mongodb = rslt_db;
        mod.db.mongodb = rslt_db;
      }
      else module.mongodb = rslt_db;
    }
    callback();
  });

  return {

    mongodb: module.mongodb,
    insert: require("./core/insert.js"),
    update: require("./core/update.js"),
    delete: require("./core/delete.js"),
    find: require("./core/find.js")

  };
};
