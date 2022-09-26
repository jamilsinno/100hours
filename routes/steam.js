const express = require('express')
const router = express.Router()
const steamController = require('../controllers/steam')
const {steamAuth} = require('../middleware/steamAuth')

router.get('/', steamAuth, steamController.goToSteam)
router.get('/return', steamAuth, steamController.goToSteam)

// router.get('route', 'middleware to ensure auth as many as you need', 'controllers of all sorts as many as you need')

module.exports = router