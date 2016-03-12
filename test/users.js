var request = require('supertest')
var expect = require('chai').expect
var app = require('../lib/app')

describe('USERS', function () {
  var data = {
    user: {
      username: 'mike',
      email: 'mike@gmail.com',
      password: '12345'
    }
  }

  it('Should create an user - POST /users', function (done) {
    request(app)
    .post('/api/users')
    .send(data)
    .set('Accept', 'application/json')
    .expect(201)
    .end(function (err, res) {
      expect(err).to.be.equal(null)
      done()
    })
  })
})
