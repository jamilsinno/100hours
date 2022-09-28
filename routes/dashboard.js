const express = require('express')
const router = express.Router()
const {ensureAuth} = require('../middleware/auth')
const dashboardController = require('../controllers/dashboard')

// load dashboard
router.get('/:steamId', ensureAuth, dashboardController.getDashboard)

//update user
router.get('/:steamId/refresh', ensureAuth, dashboardController.updateUser)

// router.get('route', 'middleware to ensure auth as many as you need', 'controllers of all sorts as many as you need')

module.exports = router