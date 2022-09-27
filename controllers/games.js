module.exports = {
    getGames : (req, res) => {
        res.render('games.ejs', {user: req.user})
    },
    getGameInfo : (req, res) => {
        // console.log(req.user.games)
        // console.log(req.params.appId)
        // console.log(req.user.games.filter( el => el.appid == req.params.appId))
        res.render(`game.ejs`, {user: req.user, game: req.user.games.filter( el => el.appid == req.params.appId)[0]})
    }
}