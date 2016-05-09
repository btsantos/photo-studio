'use strict'

var User = require('../src/models/user')
var faker = require('faker')

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

module.exports = collections
