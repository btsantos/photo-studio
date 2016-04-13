var router = require('express').Router()
var photographers = []

router.route('/photographers')
/**
 * @api {post} /photographers Create new photographer
 * @apiDescription Endpoint to create a new photographer
 * @apiName CreatePhotographer
 * @apiVersion 0.0.1
 *
 * @apiExample {curl} CURL Example:
 * curl -X POST https://localhost/v1/photographers
 *
 * @apiParam (RequestBody) {Object} Photographer Representation about the new Photographer
 */
  .post(function (req, res) {
    // TODO: Add data models to test employees
    photographers.push(req.body.photographer)
    // Validate data
    // Try to save resource (employee)
    // Return response to posibless response
    //  1.- Succesful
    //  2.- Error
    var self = {
      'id': 123,
      '_links': [
        {
          'rel': 'self',
          'href': 'https://localhost/v1/photographers/123'
        }
      ]
    }
    res.status(201).json(self)
  })

module.exports = router
