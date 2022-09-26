const fetch = require('node-fetch')
const User = require('../models/User')

module.exports = {
    getDashboard: (req,res)=>{
        // console.log(req)
        res.render('dashboard.ejs', {user: req.user})
    },
    updateUser: async (req, res, next) => {
        // console.log(req.user)

        // Online/Offline check
        const playerState = await fetch(`http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${process.env.STEAM_API_KEY}&steamids=${req.user.steamId}`)
        const playerStatejson = await playerState.json()

        // Update list of games
        const playerOwnedGames = await fetch(`http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${process.env.STEAM_API_KEY}&steamid=${req.user.steamId}`)
        const playerOwnedGamesjson = await playerOwnedGames.json()

        // Update the user with the new information
        await User.updateOne({"steamId": req.user.steamId}, {
            $set: {
                personaState: playerStatejson.response.players[0].personastate,
                gameCount: playerOwnedGamesjson.response.game_count,
                games: playerOwnedGamesjson.response.games
            }
        })
        next()
    }
}