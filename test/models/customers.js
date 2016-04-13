var mongoose = require('mongoose')
var expect = require('chai').expect
var customer = require('../../lib/models/customers')()

mongoose.connection.on('connected', function () {
  console.log('Mongose default connection')
})

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

  describe('shoudl regiser a new customer', function () {
    it('.register()', function (done) {
      customer.register({email: 'test@gmail.com', password: '123'}, function (err, cus) {
        console.log(err)
        expect(err).to.equal(null)
        console.log(cus)
        done()
      })
    })
  })
})
