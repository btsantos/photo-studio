var mongoose = require('mongoose')
var Schema = mongoose.Schema

module.exports = function (lastname) {
  var Customer = mongoose.model('customers', new Schema({
    email: {
      type: String
      // index: {
      //   unique: true,
      //   required: true
      // }
    },
    firstName: String,
    lastName: String
  }))

  var _createCustomer = function (req, cb) {
    var customer = new Customer(req)
    customer.save(function (err, doc) {
      if (err) {
        return cb(err)
      } else {
        return cb(null, doc)
      }
    })
  }

  return {
    register: _createCustomer
  }
}
