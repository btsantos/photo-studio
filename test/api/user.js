var request = require('supertest')
var expect = require('chai').expect
var app = require('../../src')
var faker = require('faker')
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/getme')

describe('Resource User', function () {
  before(function (done) {
    mongoose.connection.db.dropCollection('users', function (err, result) {
      if (err) {
        console.log(err)
      }
    })
    done()
  })

  describe('POST /users', function () {
    var users = []
    for (var i = 0; i < 5; i++) {
      users.push({
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password()
      })
    }

    for (var j = 0, x = users.length; j < x; j++) {
      (function (i) {
        it('should create the user = { name: ' + users[i].username + ', email: ' + users[i].email + '}', function (done) {
          request(app)
          .post('/api/v1/users')
          .send(users[i])
          .set('Accept', 'application/json')
          .expect(201)
          .end(function (err, res) {
            var myUser = res.body
            expect(err).to.be.equal(null)
            expect(myUser).to.not.be.undefined
            expect(myUser).to.has.property('_id')
            done()
          })
        })
      })(j)
    }
  })
})
