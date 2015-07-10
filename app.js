var express = require('express');
var app = express();
var login = require('./lib/login/index');
app.use(login);

app.get('/', function(req, res) {
  if (req.session) {
    console.log('session active');
  } else {
    res.sendFile(__dirname + '/lib/login/index.html');
  }
});

app.listen(3000);
console.log('running...');
