var router = require('express').Router()

router.use(require('./users'))
router.use(require('./photographers'))

module.exports = router
