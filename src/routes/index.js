var router = require('express').Router()

router.use(require('./user'))
router.use(require('./photographer'))

module.exports = router
