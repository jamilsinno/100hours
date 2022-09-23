const passport = require('passport')

module.exports = {
    steamAuth : function (req, res, next) {
        console.log('we get here')
        passport.authenticate('steam', { failureRedirect: '/signup' })
        console.log('here we don\'t get')
        return next()
    },
}