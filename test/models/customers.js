var expect = require('chai').expect
var customer = require('../../lib/models/customers')()
require('../../lib/models/db')

describe('Customers', function () {
  describe('shoudl regiser a new customer', function () {
    it('.register()', function (done) {
      customer.register({email: 'info@gmail', firstName: 'info', lastName: 'foin'}, function (err, customer) {
        expect(err).to.equal(null)
        done()
      })
    })
  })
})
