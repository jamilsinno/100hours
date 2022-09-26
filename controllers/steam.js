module.exports = {
    goToSteam : function (req, res) {
        // console.log(req.user)
        // console.log()
        res.redirect(`/dashboard/${req.user.steamId}`)
       },
}