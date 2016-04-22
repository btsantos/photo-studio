var server = require('./src')
var config = require('./config')

server.listen(config.port, function () {
  console.log('Server running on port %d ', config.port)
})
