'use strict'

var request = require('supertest')
var expect = require('chai').expect
var app = require('../../src')
var faker = require('faker')
var config = require('../../config')

describe('Resource Users', function () {
  describe('POST /users', function () {
    const endPoint = '/v1/users'
    let userData = {}

    beforeEach(function () {
      userData = {
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password()
      }
    })

    it('should return status code 201', function (done) {
      request(app)
      .post(endPoint)
      .send(userData)
      .end(function (err, res) {
        if (err) {
          return Error(err.message)
        }
        expect(res.status).to.equal(201)
        done()
      })
    })

    it('should return Content-type application/nvd.collection+json', function (done) {
      request(app)
      .post(endPoint)
      .send(userData)
      .end(function (err, res) {
        expect(err).to.equal(null)
        expect(res.type).to.equal('application/vnd.collection+json')
        done()
      })
    })

    it('should return object literal that has a href property with its URL, it represents the new resource created', function (done) {
      request(app)
      .post(endPoint)
      .send(userData)
      .end(function (err, res) {
        expect(err).to.equal(null)
        expect(res.body).to.has.property('href')
        done()
      })
    })

    it('should return object literal that has a Array with its data', function (done) {
      request(app)
      .post(endPoint)
      .send(userData)
      .end(function (err, res) {
        expect(err).to.equal(null)
        expect(res.body).to.has.property('data').to.be.an('Array')
        done()
      })
    })
  })

  describe('GET /users', function () {
    let endPoint = '/v1/users'
    it('should return Content-type application/vnd.collection+json', function (done) {
      request(app)
      .get(endPoint)
      .end(function (err, res) {
        expect(err).to.equal(null)
        expect(res.type).to.equal('application/vnd.collection+json')
        done()
      })
    })

    it('should return status code 200', function (done) {
      request(app)
      .get(endPoint)
      .end(function (err, res) {
        expect(err).to.equal(null)
        expect(res.status).to.equal(200)
        done()
      })
    })

    it('should return an json object in his entity body', function (done) {
      request(app)
      .get(endPoint)
      .end(function (err, res) {
        expect(err).to.equal(null)
        expect(res.body).to.be.an('object')
        done()
      })
    })

    it('should has a property collection in its entity body, it is an object javascript', function (done) {
      request(app)
      .get(endPoint)
      .end(function (err, res) {
        expect(err).to.equal(null)
        expect(res.body).to.has.property('collection').to.be.an('object')
        done()
      })
    })

    it('should return a href about resource /users into its collection', function (done) {
      request(app)
      .get(endPoint)
      .end(function (err, res) {
        expect(err).to.equal(null)
        expect(res.body.collection).to.has.property('href').equal(config.urlBase + '/v1/users/')
        done()
      })
    })

    it('should return a collection which has a Array of items', function (done) {
      request(app)
      .get(endPoint)
      .end(function (err, res) {
        expect(err).to.equal(null)
        expect(res.body.collection).to.has.property('items').to.be.an('Array')
        done()
      })
    })
  })

  // describe('GET /users/:id', function () {
  //   // TODO: Especificar cual es el content-type del response que se espera del request
  //   it('should get just one user that exist in the database', function (done) {
  //     request(app)
  //     .get('/v1/users/' + usersTest[0]._id)
  //     .expect(200)
  //     .end(function (err, res) {
  //       var user = res.body
  //       expect(err).to.equal(null)
  //       expect(user).to.be.an('object')
  //       expect(user).to.has.property('_id').equal(usersTest[0]._id)
  //       done()
  //     })
  //   })

  //   it('should get a status code equal 404 if the users does not exist', function (done) {
  //     // TODO: Especificar cual es el content-type del response que se espera del request
  //     request(app)
  //     .get('/v1/users/223242324232423242324324')
  //     .end(function (err, res) {
  //       expect(err).to.equal(null)
  //       expect(res.status).to.equal(404)
  //       done()
  //     })
  //   })
  // })

  // describe('DELETE /users/:id', function () {
  //   // TODO: Especificar cual es el content-type del response que se espera del request
  //   it('should return status 200 after DELETE the user', function (done) {
  //     request(app)
  //     .del('/v1/users/' + usersTest.pop()._id)
  //     .end(function (err, res) {
  //       if (err) throw err
  //       expect(res.status).to.equal(200)
  //       done()
  //     })
  //   })

  //   it('should return a message equal to -> user was deleted', function (done) {
  //     // TODO: Especificar cual es el content-type del response que se espera del request
  //     var userDeleted = usersTest.pop()
  //     request(app)
  //     .del('/v1/users/' + userDeleted._id)
  //     .end(function (err, res) {
  //       expect(err).to.equal(null)
  //       expect(res.body.message).to.equal('User ' + userDeleted.username + ' was deleted')
  //       done()
  //     })
  //   })
  // })

  // describe('PUT /users/:id', function () {
  //   // TODO: Especificar cual es el content-type del response que se espera del request
  //   it('should return status 201 after update the user', function (done) {
  //     request(app)
  //     .put('/v1/users/' + usersTest[0]._id)
  //     .send({username: 'miguellgt'})
  //     .end(function (err, res) {
  //       expect(err).to.equal(null)
  //       expect(res.status).to.equal(201)
  //       done()
  //     })
  //   })

  //   it('should return one representation of user which has the new username', function (done) {
  //     // TODO: Especificar cual es el content-type del response que se espera del request
  //     request(app)
  //     .put('/v1/users/' + usersTest[0]._id)
  //     .send({username: 'miguelgt'})
  //     .end(function (err, res) {
  //       expect(err).to.equal(null)
  //       expect(res.body).to.has.property('username').equal('miguelgt')
  //       done()
  //     })
  //   })
  // })
})
