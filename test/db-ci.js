'use strict'

var mongoose = require('mongoose')
var config = require('../config')
var collections = require('./collection-data')

mongoose.connect(config.mongodbUri)

var db = mongoose.connection

// Delete database
db.on('open', function (err) {
  if (!err) {
    mongoose.connection.db.dropDatabase(function (err) {
      if (!err) {
        console.log('Database deleted')
      }
    })
  }
})

// Create database
mongoose.createConnection(config.mongodbUri)
db = mongoose.connection

db.on('open', function (err) {
  console.log('New Database')
  // Create Collections with data
  // Users
  if (!err) {
    console.log("Inserting User's Datas...")
    collections.addUsers(function (err, res) {
      if (!err) {
        console.log(res)
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
