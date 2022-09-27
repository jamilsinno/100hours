const express = require('express')
const router = express.Router()
const {ensureAuth} = require('../middleware/auth')
const gamesController = require('../controllers/games')

router.get('/:steamId', ensureAuth, gamesController.getGames)
router.get('/:steamId/:appId', ensureAuth, gamesController.getGameInfo)

// router.get('route', 'middleware to ensure auth as many as you need', 'controllers of all sorts as many as you need')

module.exports = router