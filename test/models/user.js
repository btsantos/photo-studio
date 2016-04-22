var expect = require('chai').expect
var user = require('../../src/models/user')()

var mongoose = require('mongoose')

describe('models/users', function () {
  beforeEach(function (done) {
    mongoose.connection.db.dropCollection('users', function (err, result) {
      err ? console.log(err) : done()
    })
  })

  describe('.register()', function () {
    it('should register an user', function (done) {
      var data = {
        name: 'test',
        email: 'test@gmail.com'
      }
      user.register(data, function (err, doc) {
        expect(err).to.equal(null)
        done()
      })
    })
  })
})
