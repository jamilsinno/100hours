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
    // console.log(profile)
    
      // Online/Offline feature
      const playerState = await fetch(`http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${process.env.STEAM_API_KEY}&steamids=${profile.id}`)
      const playerStatejson = await playerState.json()

      // List Of Games
      const playerOwnedGames = await fetch(`http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?appid=440&key=${process.env.STEAM_API_KEY}&steamid=${profile.id}&include_appinfo=true&include_played_free_games=true`)
      const playerOwnedGamesjson = await playerOwnedGames.json()

      // Recently Played Games
      const recentlyPlayed = await fetch(`http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${process.env.STEAM_API_KEY}&steamid=${profile.id}`)
      const recentlyPlayedjson = await recentlyPlayed.json()

      const newUser ={
        steamId: profile.id,
        displayName: profile.displayName,
        profileURL: profile._json.profileurl,
        avatar: profile._json.avatar,
        avatarMedium: profile._json.avatarmedium,
        avatarFull: profile._json.avatarfull,
        personaState: profile._json.personastate,
        personaState: playerStatejson.response.players[0].personastate,
        gameCount: playerOwnedGamesjson.response.game_count,
        games: playerOwnedGamesjson.response.games,
        recentlyPlayed: recentlyPlayedjson.response.games,
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
  // console.log(user)
  done(null, user.id);
})

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => done(err, user))
})