var request = require('supertest')
var expect = require('chai').expect
var app = require('../lib/app')

describe('Photographers', function () {
  var data = {
    photographer: {
      user: {
        _id: 123344,
        username: 'mike',
        email: 'mike@gmail.com'
      },
      firstName: 'Miguel Angel',
      lastName: 'Galicia',
      phoneNumber: '444-8309064'
    }
  }
  describe('Create a new Photographer', function () {
    it('POST /photographers', function (done) {
      request(app)
        .post('/v1/photographers')
        .send(data)
        .set('Accept', 'application/json')
        .expect(201)
        .end(function (err, res) {
          expect(err).to.be.equal(null)
          // TODO: Create test to check the response
          done()
        })
    })
  })
})
