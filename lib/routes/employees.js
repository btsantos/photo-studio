var router = require('express').Router()
var employees = []

router.route('/employees')
  .post(function (req, res) {
    // TODO: Add data models to test employees
    employees.push(req.body.employee)
    // Validate data
    // Try to save resource (employee)
    // Return response to posibless response
    //  1.- Succesful
    //  2.- Error
    var employee = {
      'id': 123,
      '_links': [
        {
          'rel': 'self',
          'href': 'https://api.photographer.com/v1/employees/123'
        }
      ]
    }
    res.status(201).json(employee)
  })

module.exports = router
