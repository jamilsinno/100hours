const passport = require('passport')
const passportSteam = require('passport-steam')
const SteamStrategy = passportSteam.Strategy
const User = require('../models/User')

passport.serializeUser((user, done) => {
  done(null, user.id);
})

passport.deserializeUser((id, done) => {
  done(null, user.id)
})

passport.use(new SteamStrategy({
    returnURL: `${process.env.STEAM_API_KEY}/auth/steam/return`,
    realm: `${process.env.BASE_URL}`,
    apiKey: `${process.env.STEAM_API_KEY}`
  }, 
    function(identifier, profile, done) {
      User.findByOpenID({ openId: identifier }, function (err, user) {
        console.log(err)
        return done(err, user);
      });
  }))