var expect = require('chai').expect
var customer = require('../../lib/models/customer')()
var mongoose = require('mongoose')
var dbURI = 'mongodb://localhost/getme'

mongoose.connect(dbURI)

describe('Customers', function () {
  beforeEach(function (done) {
    mongoose.connection.db.dropCollection('customers', function (err, result) {
      if (err) {
        console.log(err)
      }
    })
    done()
  })

  describe('.register()', function () {
    it('should register a customer', function (done) {
      var newCustomer = {
        email: 'mike@gmail.com',
        firstName: 'Miguel',
        lastName: 'Galicia'
      }
      customer.register(newCustomer, function (err, customer) {
        expect(err).to.equal(null)
        done()
      })
    })
  })
})
