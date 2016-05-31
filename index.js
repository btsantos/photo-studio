var app = require('./src')
var http = require('http')
var config = require('./config')
var mongoose = require('mongoose')

var server = http.createServer(app)

mongoose.connect(config.mongodbUri)

server.listen(config.port, function () {
  console.log('Server runnign on port %d', config.port)
})
