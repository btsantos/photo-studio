var router = require('express').Router()

router.route('/users')
  .post(function (req, res) {
    res.json({status: 201})
  })

module.exports = router
