var express = require('express');
var fs = require('fs');
var app = module.exports = express();

app.get('/lib1', function(req, res) {
  fs.readFile(__dirname + '/index.html', 'utf8', function(err, text){
    res.send(text);
  });
});
