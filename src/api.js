var express = require('express')
var cors = require('cors')

var fs = require('fs');

var json;
fs.readFile('./data.json', 'utf8', function (err, data) {
  if (err) throw err;
  json = JSON.parse(data);
});

var server = express()               

var port = process.env.PORT || 5000

server.use(cors())
server.get('/phones', function(req, res) {
    res.json(json)  
})


server.listen(port)
console.log("Runnning on port " + port.toString())