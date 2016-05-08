var mongoose = require('mongoose')
var config = require('../config')
var User = require('../src/models/user')

mongoose.connect(config.mongodbUri)

var db = mongoose.connection

// Delete database
db.on('open', function (err) {
  mongoose.connection.db.dropDatabase(function (err) {
    if (!err) {
      console.log('Database deleted')
    }
  })
})

// Create database
mongoose.createConnection(config.mongodbUri)
db = mongoose.connection

// Create Collections with data
// Users
db.on('open', function (err) {
  console.log('New Database')
  if (!err) {
    console.log("Inserting User's Datas...")
    var user = new User()
    user.username = 'mike'

    user.save(function (err, doc) {
      if (!err) {
        console.log(doc)
        db.close()
      }
    })
  }
})

db.on('close', function (err) {
  if (!err) {
    console.log('Continuous Database Integration was successful')
    process.exit(0)
  }
})
