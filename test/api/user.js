var request = require('supertest')
var expect = require('chai').expect
var app = require('../../src')
var faker = require('faker')
var mongoose = require('mongoose')

describe('Resource User', function () {
  var userTest = {}

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
    for (var i = 0; i < 5; i++) {
      users.push({
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password()
      })
    }

    for (var j = 0, x = users.length; j < x; j++) {
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
      .set('Accept', 'application/json')
      .expect(200)
      .end(function (err, res) {
        var users = res.body
        expect(err).to.equal(null)
        expect(users).to.be.an('Array')
        expect(users.length).to.equal(5)
        userTest = users[0]
        for (var i = 0, x = users.length; i < x; i++) {
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
    it('should get just one user who exist in the database', function (done) {
      request(app)
      .get('/api/v1/users/' + userTest._id)
      .set('Accept', 'application/json')
      .expect(200)
      .end(function (err, res) {
        var user = res.body
        expect(err).to.equal(null)
        expect(user).to.be.an('object')
        expect(user).to.has.property('_id').equal(userTest._id)
        done()
      })
    })

    it('should get a status code equal 404 if the users does not exist', function (done) {
      request(app)
      .get('/api/v1/users/223242324232423242324324')
      .set('Accept', 'application/json')
      .expect(404)
      .end(function (err, res) {
        expect(err).to.equal(null)
        done()
      })
    })
  })
})
