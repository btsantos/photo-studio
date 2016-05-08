var mongoose = require('mongoose')
var config = require('../config')

mongoose.connect(config.mongodbUri)

// Delete database
mongoose.connection.on('open', function () {
  mongoose.connection.db.dropDatabase(function (err) {
    if (!err) {
      console.log('Database deleted')
    }
    process.exit(0)
  })
})

