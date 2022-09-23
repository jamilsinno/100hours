const passport = require('passport')
const passportSteam = require('passport-steam')
const SteamStrategy = passportSteam.Strategy
const User = require('../models/User')

passport.use(new SteamStrategy({
    returnURL: `${process.env.BASE_URL}/auth/steam/return`,
    realm: `${process.env.BASE_URL}`,
    apiKey: `${process.env.STEAM_API_KEY}`,
    stateless: true,
  }, 
  async function(identifier, profile, done) {
    console.log(profile)

    const newUser ={
      steamId: profile.id,
      displayName: profile.displayName,
      profileURL: profile._json.profileurl,
      avatar: profile._json.avatar,
      avatarMedium: profile._json.avatarmedium,
      avatarFull: profile._json.avatarfull,
    }

    try{
      let user = await User.findOne({ steamId: profile.id })
      if (user) {
        done(null, user)
      } else {
        user = await User.create(newUser)
        done(null, user)
      }
    }
    catch (err){
      console.log(err)
    }
}))


passport.serializeUser((user, done) => {
  console.log(user)
  done(null, user.id);
})

// passport.deserializeUser((user, done) => {
//   console.log(user)
//   done(null, user._id)
// })

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => done(err, user))
})