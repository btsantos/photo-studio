var request = require('supertest')
var expect = require('chai').expect
var app = require('../lib/app')

describe('EMPLOYEES', function () {
  var data = {
    employee: {
      user: {
        _id: 123344,
        username: 'mike',
        email: 'mike@gmail.com',
        password: 'abcd',
        firstName: 'Miguel Angel',
        lastName: 'Galicia',
        phoneNumber: '444-8309064'
      },
      hireDate: null,
      job: {
        _id: 43,
        position: 'Photographer'
      },
      salary: null,
      commission: null,
      department: {
        _id: 10,
        name: 'Photograph',
        location: 'Abc'
      }
    }
  }

  it('Create a new Employee -> POST /employees', function (done) {
    request(app)
      .post('/v1/employees')
      .send(data)
      .set('Accept', 'application/json')
      .expect(201)
      .end(function (err, res) {
        expect(err).to.be.equal(null)
        console.log(res.body)
        done()
      })
  })
})
