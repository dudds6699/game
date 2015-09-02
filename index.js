// Setup basic express server
var express = require('express');
var app = express();
var port = 3000;
var server = require('http').createServer(app);
app.use(express.static(__dirname + '/public'));



server.listen(port, function () {
  console.log('Server listening at port %d', port);
});