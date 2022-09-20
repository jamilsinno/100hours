const port = process.env.PORT
const apiKey = process.env.STEAM_API_KEY
const passport = require('passport')
const SteamStrategy = require('passport-steam').Strategy

module.exports = {
    steamLogin : passport.use(new SteamStrategy({
        returnURL: `http://localhost:${port}/auth/steam/return`,
        realm: `http://localhost:${port}/`,
        apiKey: `${apiKey}`
    },
    function(identifier, profile, done) {
        User.findByOpenID({ openId: identifier }, function (err, user) {
                return done(err, user);
            })
        },
    ))
}