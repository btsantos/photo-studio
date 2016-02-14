var router = require('express').Router()

/**
 * @api {post} /users Create new user
 * @apiDescription Create a new user
 * @apiName CreateUser
 * @apiGroup Admin
 * @apiVersion 0.0.1
 *
 * @apiExample {curl} CURL Example
 * curl -X POST http://localhost/api/users
 *
 * @apiParam (RequestBody) {String} username, email and password
 */
router.route('/users')
  .post(function (req, res) {
    res.status(201).json({
      status: 'ok',
      errors: [{msg: 'User was created'}]
    })
  })

module.exports = router
