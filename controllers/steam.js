const passport = require('passport')

module.exports = {
    goToSteam : function (req, res) {
        console.log('this is goToSteam')
        res.redirect('/todos')
       },
    returnFromSteam: function () {
        console.log('123321')
        res.redirect('https://google.com')
    }
}