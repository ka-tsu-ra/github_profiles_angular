var express = require('express');
var app = express();
var server = require('http').createServer(app);
var path = require('path')

app.use(express.static(process.cwd() + '/public'));
app.use('/bower_components', express.static(path.join(__dirname, 'bower_components')));

app.get('/', function (request, response) {
  response.sendfile('views/index.html');
});

server.listen(3000, function () {
  console.log('Server listening on port 3000');
});

module.exports = server;
