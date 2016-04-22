var router = require('express').Router()
var users = []

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
    var user = req.body.user
    users.push(user)
    res.status(201).json(user)
  })

module.exports = router
