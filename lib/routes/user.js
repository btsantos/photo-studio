var router = require('express').Router()
var User = require('../db/models/user')

const FAIL_SERVER = 500
const OK = 200
const USER_CREATED = 201
const USER_NOT_FOUND = 404

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
    User.forge(req.body.user)
      .save()
      .then(function (user) {
        res.status(USER_CREATED).json({
          user: user.attributes
        })
      })
      .catch(function (err) {
        res.status(FAIL_SERVER).json({
          message: err.message
        })
      })
  })

router.route('/users/:id')
  /**
   * @api {get} /users/:id Get one user
   * @apiDescription Getting one user with id
   * @apiName GetUser
   * @apiGroup Admin
   * @apiVersion 0.1.0
   *
   * @apiExample {curl} CURL Example:
   * curl -X GET http://localhost/api/users?id=5
   */
  .get(function (req, res) {
    User.forge({id: req.params.id})
      .fetch()
      .then(function (user) {
        if (user) {
          res.status(OK).json({
            user: user.attributes
          })
        } else {
          res.status(USER_NOT_FOUND).json({
            message: 'The user with id: ' + req.params.id + ' did not find'
          })
        }
      })
      .catch(function (err) {
        res.status(FAIL_SERVER).json({
          message: err.message
        })
      })
  })

module.exports = router
