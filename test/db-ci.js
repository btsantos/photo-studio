'use strict'

var mongoose = require('mongoose')
var config = require('../config')
var User = require('../src/models/user')
var faker = require('faker')

mongoose.connect(config.mongodbUri)

var db = mongoose.connection

var collections = {
  addUsers: function (cb) {
    const totalUsers = 40
    for (var i = 0; i < totalUsers; i++) {
      let data = {
        username: faker.internet.userName(),
        email: faker.internet.email()
      }
      let newUser = new User(data)
      newUser.save(function (err, user) {
        if (err) {
          cb(true, err)
        }
        console.log(user)
      })
    }
    cb(null, "User's documents was added")
  }
}

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

// Create Collections with data
// Users
db.on('open', function (err) {
  console.log('New Database')
  if (!err) {
    console.log("Inserting User's Datas...")
    collections.addUsers(function (err, res) {
      console.log(res)
      // if (!err) {
      //   console.log(res)
      //   // db.close()
      // }
    //   // if (!err) {
    })
    // collections.addUsers(function (err, res) {
    //   //   console.log(res)
    //   db.close()
    //   // }
    // })
  }
})

db.on('close', function (err) {
  if (!err) {
    console.log('Continuous Database Integration was successful')
    process.exit(0)
  }
})
