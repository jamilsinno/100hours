module.exports = {
    steam : function(req, res, next) {
        console.log(req)
        req.url = req.originalUrl;
        return next();
    }
}