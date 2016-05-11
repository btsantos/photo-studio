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
    // TODO: Especificar el Location en el header para la URL del recurso creado
    user.save(function (err, doc) {
      if (!err) {
        let userRepresentation = {
          href: config.urlBase + '/v1/users/' + doc._id
        }
        res.set('Content-type', 'application/vnd.collection+json')
        res.status(201).json(userRepresentation)
      }
    })
  })

  /**
   * @api {get} /users Get all users with a collection
   * @apiDescription Endpoint to get all users
   * @apiName GetUsers
   * @apiVersion 0.1.3
   *
   * @apiExample {curl} CURL Example:
   * curl GET http://localhost:3000/v1/users
   */
  .get(function (req, res) {
    User.find({}, function (err, users) {
      if (!err) {
        let _items = users.map((user) => {
          return {
            // A document tha doesn't follow these rules isn't a Collection+JSON document: It's just some JSON
            href: config.urlBase + '/v1/users/' + user._id,
            data: [
              { name: 'username', value: user.username },
              { name: 'email', value: user.email }
            ],
            links: []
          }
        })
        let collectionUsers = {
          collection: {
            // The Collection+JSON standar defines  this string (href) as "the address used
            // to retrieve a representation of the document"
            href: config.urlBase + '/v1/users/',
            // Each item in the list represents an HTTP resource  with its own URL
            items: _items,
            template: {
              data: [
                { prompt: "User's username", name: 'username', value: null },
                { prompt: "User's email", name: 'email', value: null }
              ]
            }
          }
        }
        res.location(config.urlBase + '/v1/users/')
        res.set('Content-Type', 'application/vnd.collection+json')
        res.status(200).json(collectionUsers)
      }
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
    // TODO: Especificar el Content-type del response, para este caso es application/json
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
    // TODO: Definir status code 200 (ok) or 204 (No Content)
    User.findById(req.params.id, function (err, user) {
      if (!err) {
        user.username = req.body.username
        user.save(function (err, doc) {
          if (!err && doc) {
          }
        })
      }
    })
  })

module.exports = router
