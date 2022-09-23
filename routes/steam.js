const express = require('express')
const router = express.Router()
const steamController = require('../controllers/steam')
const passport = require('passport')

router.get('/', passport.authenticate('steam', { failureRedirect: '/signup' }), steamController.goToSteam)
router.get('/return', passport.authenticate('steam', { failureRedirect: '/signup' }), steamController.goToSteam)

// router.get('route', 'middleware to ensure auth as many as you need', 'controllers of all sorts as many as you need')

module.exports = router