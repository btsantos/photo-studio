var request = require('supertest')
var expect = require('chai').expect
var app = require('../../src')
var faker = require('faker')
var mongoose = require('mongoose')

const NUM_USERS = 10
var usersTest = []

describe('Resource User', function () {
  before(function (done) {
    mongoose.connection.db.dropCollection('users', function (err, result) {
      if (err) {
        console.log(err)
      }
    })
    done()
  })

  describe('POST /users', function () {
    var users = []
    for (var i = 0; i < NUM_USERS; i++) {
      users.push({
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password()
      })
    }

    for (var j = 0; j < NUM_USERS; j++) {
      (function (i) {
        it('should create the user = { name: ' + users[i].username + ', email: ' + users[i].email + '}', function (done) {
          request(app)
          .post('/api/v1/users')
          .send(users[i])
          .set('Accept', 'application/json')
          .expect(201)
          .end(function (err, res) {
            var myUser = res.body
            expect(err).to.be.equal(null)
            expect(myUser).to.not.be.undefined
            expect(myUser).to.has.property('_id')
            expect(myUser).to.has.property('username').equal(users[i].username)
            expect(myUser).to.has.property('email').equal(users[i].email)
            done()
          })
        })
      })(j)
    }
  })

  describe('GET /users', function () {
    it('should get all users', function (done) {
      request(app)
      .get('/api/v1/users')
      .expect(200)
      .end(function (err, res) {
        var users = res.body
        expect(err).to.equal(null)
        expect(users).to.be.an('Array')
        expect(users.length).to.equal(NUM_USERS)
        usersTest = users
        for (var i = 0; i < NUM_USERS; i++) {
          expect(users[i]).to.be.an('object')
          expect(users[i]).to.has.property('_id')
          expect(users[i]).to.has.property('username')
          expect(users[i]).to.has.property('email')
        }
        done()
      })
    })
  })

  describe('GET /users/:id', function () {
    it('should get just one user that exist in the database', function (done) {
      request(app)
      .get('/api/v1/users/' + usersTest[0]._id)
      .expect(200)
      .end(function (err, res) {
        var user = res.body
        expect(err).to.equal(null)
        expect(user).to.be.an('object')
        expect(user).to.has.property('_id').equal(usersTest[0]._id)
        done()
      })
    })

    it('should get a status code equal 404 if the users does not exist', function (done) {
      request(app)
      .get('/api/v1/users/223242324232423242324324')
      .end(function (err, res) {
        expect(err).to.equal(null)
        expect(res.status).to.equal(404)
        done()
      })
    })
  })

  describe('DELETE /users/:id', function () {
    it('should return status 200 after DELETE a user', function (done) {
      request(app)
      .del('/api/v1/users/' + usersTest.pop()._id)
      .end(function (err, res) {
        if (err) throw err
        expect(res.status).to.equal(200)
        done()
      })
    })
  })
})
