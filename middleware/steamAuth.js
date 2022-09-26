const passport = require('passport')

module.exports = {
    steamAuth : function (req, res, next) {
        passport.authenticate('steam', { failureRedirect: '/' })(req, res, next)
    },
}