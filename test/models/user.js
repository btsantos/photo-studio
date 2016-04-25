var expect = require('chai').expect
var faker = require('faker')
var user = require('../../src/models/user')()

var mongoose = require('mongoose')

describe('models/users', function () {
  var userTest = {}

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
        email: faker.internet.email(),
        age: faker.random.number({min: 18, max: 25})
      })
    }

    userTest = users[0]

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

  describe('.getUser()', function () {
    it('shoud get just one user with his id, name and email', function (done) {
      user.getUser({name: userTest.name}, function (err, doc) {
        expect(err).to.equal(null)
        console.log(doc)
        expect(doc).to.be.an('object')
        expect(doc).to.has.property('_id')
        expect(doc).to.has.property('name').equal(userTest.name)
        expect(doc).to.has.property('email').equal(userTest.email)
        done()
      })
    })
  })
})
