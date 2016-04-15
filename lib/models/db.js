var mongoose = require('mongoose')
var dbURI = 'mongodb://localhost/getme'

mongoose.connect(dbURI)

mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to' + dbURI)
})

mongoose.connection.on('disconnected', function () {
  console.log('Mongoose disconnected')
})

mongoose.connection.on('error', function (err) {
  console.log('Mongoose connection error:' + err)
})

process.on('SIGINT', function () {
  mongoose.connection.close(function () {
    console.log('Mongoose display_name through app termination')
    process.exit(0)
  })
})
