var express = require('express');
var bodyParser = require('body-parser');
var db = require('./db/db-helper.js');

// attach services
var app = express();

// register location of static files
app.use(express.static(__dirname + '/client'));
app.use(bodyParser.json());

// default route
app.get('/', function(req, res) {
  res.sendFile('./index.html', {'root': '.'});
});

// get all users
app.get('/findAll', function(req, res) {
  db.findAll()
    .then(function(maps) {
      res.status(200).end(JSON.stringify(maps));
    })
    .catch(function(err) {
      console.log('🍊 can\'t do findAll() in app.get', err);
    });
});

// wildcard for other routes
app.get('*', function(req, res) {
  res.status(404).end('Not Found');
});

// start the server
app.listen(8080);
console.log('🍊  Listening on port 8080');