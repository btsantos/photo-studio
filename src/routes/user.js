var router = require('express').Router()
var User = require('../models/user')

router.route('/users')
  /**
   * @api {post} /users Create new user
   * @apiDescription Endpoint to create a new user
   * @apiName CreateUser
   * @apiVersion 0.0.1
   *
   * @apiExample {curl} CURL Example:
   * curl -X POST http://localhost/api/users
   *
   * @apiParam (RequestBody) {String} username The username that will be in the system
   * @apiParam (RequestBody) {String} email The email to use in the login
   * @apiParam (RequestBody) {String} password The password to use in the login
   */
  .post(function (req, res) {
    var user = new User(req.body)

    user.save(function (err, doc) {
      if (err) {
        res.status(504).json({ message: 'Error en el servidor' })
      }
      res.status(201).json({
        _id: doc._id,
        username: doc.username,
        email: doc.email
      })
    })
  })

module.exports = router
