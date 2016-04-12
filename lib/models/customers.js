var mongoose = require('mongoose')
var Schema = mongoose.Schema

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
// var Customer = function (lastname) {
//   var customerSchema = new Schema({
//     id: Number,
//     email: {
//       type: String,
//       index: {
//         unique: true,
//         required: true
//       }
//     },
//     firstName: String,
//     lastName: String
//   })

//   var _model = mongoose.model('customers', customerSchema)
//   var _register = function (customer, callback) {
//     var newCusto = new _model(customer)
//     newCusto.save(callback)
//   }
//   // var _findByEmail = function (email, success, fail) {
//   //   _model.findOne({email: email}, function (err, customer) {
//   //     if (err) {
//   //       fail(err)
//   //     } else {
//   //       success(customer)
//   //     }
//   //   })
//   // }

//   return {
//     schema: customerSchema,
//     model: _model,
//     register: _register
//     // findByEmail: _findByEmail
//   }
// }
module.exports = mongoose.model('customers', customerSchema)
