var router = require('express').Router()

router.route('/users')

  /**
   * @api {post} /users Create new user
   * @apiDescription Endpoint to create a new user, without his profile
   * @apiName CreateUser
   * @apiGroup Admin
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
    // Try to create a new user
    var aux = {
      status: 'ok',
      message: 'User was created'
    }
    res.status(201).json(aux)
  })

module.exports = router
