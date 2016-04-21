var expect = require('chai').expect
var user = require('../../src/models/user')()

var mongoose = require('mongoose')

describe('models/users', function () {
  beforeEach(function (done) {
    mongoose.connection.db.dropCollection('users', function (err, result) {
      err ? console.log(err) : done()
    })
  })

  describe('.createUser()', function () {
    it('should create new user', function (done) {
      var data = {
        name: 'test',
        email: 'test@gmail.com'
      }
      user.register(data, function (err, doc) {
        expect(err).to.equal(null)
        console.log(doc)
        done()
      })
    })
  })
})
