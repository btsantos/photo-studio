var router = require('express').Router()
var User = require('../db/models/users')

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
        req.body.user.id = user.get('id')
        res.status(201).json({
          user: user.attributes
        })
      })
      .catch(function (err) {
        res.status(500).json({
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
          res.status(200).json({
            user: user.self()
          })
        } else {
          res.status(404).json({
            message: 'The user with id: ' + req.params.id + ' did not find'
          })
        }
      })
      .catch(function (err) {
        res.status(500).json({
          message: err.message
        })
      })
  })

module.exports = router
