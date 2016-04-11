var mongoose = require('mongoose')
var Schema = mongoose.Schema

var Customer = function (lastname) {
  var customerSchema = new Schema({
    id: Number,
    email: {
      type: String,
      index: {
        unique: true,
        required: true
      }
    },
    firstName: String,
    lastName: String
  })

  var _model = mongoose.model('customers', customerSchema)
  var _findByEmail = function (email, success, fail) {
    _model.findOne({email: email}, function (err, customer) {
      if (err) {
        fail(err)
      } else {
        success(customer)
      }
    })
  }

  return {
    schema: customerSchema,
    model: _model,
    findByEmail: _findByEmail
  }
}

module.exports = Customer
