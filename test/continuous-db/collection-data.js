'use strict'

var User = require('../../src/models/user')
var faker = require('faker')

module.exports = {
  addUsers: function (cb) {
    const totalUsers = 10
    let users = []

    for (var i = 0; i < totalUsers; i++) {
      let user = {
        username: faker.internet.userName(),
        email: faker.internet.email()
      }
      users.push(user)
    }

    User.create(users, function (err, res) {
      err ? cb(true, err) : cb(null, "> User's documents was added")
    })
  }
}
