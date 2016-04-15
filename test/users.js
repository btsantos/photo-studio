var request = require('supertest')
var expect = require('chai').expect
var app = require('../lib')

describe('Users', function () {
  var data = {
    user: {
      username: 'mike',
      email: 'mike@gmail.com',
      password: '12345'
    }
  }
  describe('Create new User', function () {
    it('Should create an user - POST /users', function (done) {
      request(app)
      .post('/v1/users')
      .send(data)
      .set('Accept', 'application/json')
      .expect(201)
      .end(function (err, res) {
        expect(err).to.be.equal(null)
        done()
      })
    })
  })
})
