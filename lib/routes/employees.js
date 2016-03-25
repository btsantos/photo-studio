var router = require('express').Router()
var employees = []

router.route('/employees')
  .post(function (req, res) {
    // TODO: Add data models to test employees
    employees.push(req.body.employee)
    res.status(201).json({status: 'ok'})
  })

module.exports = router
