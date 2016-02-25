var router = require('express').Router()

router.route('/:id/profile')
  .get(function (req, res) {
    res.json({message: 'hello world this is my id:' + req.params.id})
  }) 

module.exports = router
