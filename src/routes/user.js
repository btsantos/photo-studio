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

  /**
   * @api {get} /users Get all users
   * @apiDescription Endpoint to get all users
   * @apiName GetUsers
   * @apiVersion 0.1.3
   *
   * @apiExample {curl} CURL Example:
   * curl GET https://localhost/api/v1/users
   */
  .get(function (req, res) {
    User.find({}, function (err, users) {
      if (err) {
        res.status(504).json({message: 'Error en el server'})
      }
      res.status(200).json(users)
    })
  })

router.route('/users/:id')
  /**
   * @api {get} /users/2324 Get one user
   * @apiDescription Endpoint to get one user with id
   * @apiName GetUser
   * @apiVersion 0.1.3
   *
   * @apiExample {curl} CURL Example:
   * curl GET https://localhost/api/v1/users/1244
   */
  .get(function (req, res) {
    User.findOne({_id: req.params.id}, function (err, user) {
      if (err != null) {
        res.status(504).json({message: 'Fail in the server'})
      } else {
        if (user != null) {
          res.status(200).json({
            _id: user._id,
            username: user.username,
            email: user.email
          })
        } else {
          res.status(404).json({message: 'User did not find'})
        }
      }
    })
  })

module.exports = router
