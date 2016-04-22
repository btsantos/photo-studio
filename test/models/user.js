var expect = require('chai').expect
var faker = require('faker')
var user = require('../../src/models/user')()

var mongoose = require('mongoose')

describe('models/users', function () {
  before(function (done) {
    mongoose.connection.db.dropCollection('users', function (err, result) {
      err ? console.log(err) : done()
    })
  })

  describe('.register()', function () {
    var users = []
    for (var i = 0; i < 5; i++) {
      users.push({
        name: faker.name.findName(),
        email: faker.internet.email()
      })
    }

    for (var j = 0, x = users.length; j < x; j++) {
      (function (i) {
        it('should save the user = { name: ' + users[i].name + ', email: ' + users[i].email + '}', function (done) {
          user.register(users[i], function (err, doc) {
            expect(err).to.equal(null)
            expect(doc).to.be.an('object')
            expect(doc).to.have.property('_id')
            done()
          })
        })
      })(j)
    }
  })
})
