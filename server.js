var express = require('express');
var app = express();
var server = require('http').createServer(app);

app.get('/', function(request, response) {
  response.send('Hello World!');
});

app.get('/about', function(request, response) {
  response.send('This is the about page');
});

server.listen(9999, function() {
  console.log('Server listening on port 9999');
});

module.exports = server;