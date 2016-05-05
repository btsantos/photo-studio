'use strict'

var router = require('express').Router()
var User = require('../models/user')
var config = require('../../config')

router.route('/users')
  /**
   * @api {post} /users Create new user
   * @apiDescription Endpoint to create a new user
   * @apiName CreateUser
   * @apiVersion 0.0.1
   *
   * @apiExample {curl} CURL Example:
   * curl -X POST http://localhost:3000/v1/users
   *
   * @apiParam (RequestBody) {String} username The username that will be in the system
   * @apiParam (RequestBody) {String} email The email to use in the login
   * @apiParam (RequestBody) {String} password The password to use in the login
   */
  .post(function (req, res) {
    var user = new User(req.body)

    user.save(function (err, doc) {
      if (err) {
        res.status(500).json({ message: 'Error en el servidor' })
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
   * curl GET http://localhost:3000/v1/users
   */
  .get(function (req, res) {
    User.find({}, function (err, users) {
      if (err) {
        res.status(500).json({message: 'Error en el server'})
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
   * curl GET http://localhost:3000/v1/users/123456
   */
  .get(function (req, res) {
    User.findById(req.params.id, function (err, user) {
      if (err) {
        res.status(500).json({message: 'Fail in the server'})
      } else {
        if (user) {
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

  /**
   * @api {delete} /users/2324 Delete one user
   * @apiDescription Endpoint to delete one user with his id
   * @apiName DeleteUser
   * @apiVersion 0.1.3
   *
   * @apiExample {curl} CURL Example:
   * curl DELETE http://localhost:3000/v1/users/123456
   */
  .delete(function (req, res) {
    User.findById(req.params.id, function (err, user) {
      if (!err) {
        if (user) {
          user.remove(function (err) {
            if (!err) {
              res.status(200).json({message: 'User ' + user.username + ' was deleted'})
            }
          })
        }
      }
    })
  })

  /**
   * @api {put} /users/2324 Update one user
   * @apiDescription Endpoint to update one user with his id
   * @apiName UpdateUser
   * @apiVersion 0.1.3
   *
   * @apiExample {curl} CURL Example:
   * curl PUT http://localhost:3000/v1/users/123456
   */
  .put(function (req, res) {
    User.findById(req.params.id, function (err, user) {
      if (!err) {
        user.username = req.body.username
        user.save(function (err, doc) {
          if (!err && doc) {
            let user = {
              _id: doc._id,
              _links: [
                {
                  rel: 'self',
                  href: config.hostname + 'v1/users/' + doc._id
                }
              ],
              username: doc.username,
              email: doc.email
            }
            res.status(201).json(user)
          }
        })
      }
    })
  })

module.exports = router
