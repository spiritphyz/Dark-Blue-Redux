var express = require('express');

// attach services
var app = express();

// register location of static files
app.use(express.static(__dirname + '/client'));

// default route
app.get('/', function(req, res) {
  res.sendFile('./index.html', {'root': '.'});
});

// wildcard for other routes
app.get('*', function(req, res) {
  res.status(404).end('Not Found');
});

// start the server
app.listen(8080);
console.log('🍊  Listening on port 8080');