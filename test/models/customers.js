var mongoose = require('mongoose')
var expect = require('chai').expect
// var customer = require('../../lib/models/customers')()
var Customer = require('../../lib/models/customers')

describe('Customers', function () {
  beforeEach(function (done) {
    var dbURI = 'mongodb://localhost/getme'
    mongoose.connect(dbURI)
    done()
  })

  afterEach(function (done) {
    mongoose.connection.close()
    done()
  })

  it('check connection db', function (done) {
    var newCusto = new Customer()

    newCusto.email = 'mike2@gmail.com'
    newCusto.password = '123'

    newCusto.save(function (err, customer) {
      console.log(err)
      expect(err).to.equal(null)
      console.log(customer)
      done()
    })
  })
})
