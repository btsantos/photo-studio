var expect = require('chai').expect
var users = require('../../lib/models/users')()
var mongoose = require('mongoose')

describe('models/users', function () {
  beforeEach(function (done) {
    mongoose.connection.db.dropCollection('users', function (err, result) {
      if (err) {
        console.log(err)
      }
    })
    done()
  })

  describe('.createUser()', function () {
    var user = {
      name: 'Miguel',
      email: 'miguel@gmail.com'
    }
    it('should create new user using a closure', function (done) {
      users.createUser(user, function (err, doc) {
        expect(err).to.equal(null)
        expect(user.name).to.equal(doc.name)
        done()
      })
    })
  })
})
