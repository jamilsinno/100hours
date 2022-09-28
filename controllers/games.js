const Todo = require('../models/Todo')
module.exports = {
    getGames : (req, res) => {
        // console.log(req.user.games)
        res.render('games.ejs', {user: req.user})
    },
    getGameInfo : async (req, res) => {
        console.log(req.user.games)
        console.log(req.params.appId)
        // console.log(req.user.games.filter( el => el.appid == req.params.appId))

        const todos = await Todo.find({userId: req.params.steamId, appId: req.params.appId})
        // console.log(todos)
        res.render(`game.ejs`, {user: req.user, game: req.user.games.filter( el => el.appid == req.params.appId)[0], todos: todos})
    },
    createTodo : async (req, res) => {
        try {
            // console.log(req.body)
            // console.log(req.user.games.filter( el => el.appid == req.params.appId)[0])

            //create the todo object
            const newTodo = new Todo({
                todo: req.body.todoItem, 
                completed: false,
                userId: req.params.steamId,
                appId: req.params.appId,
            })

            const saved = await newTodo.save()

            res.redirect(`/games/${req.params.steamId}/${req.params.appId}`)
        }
        catch (err) {
            console.log(err)
        }
    },
    markComplete : async (req, res) => {
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: true
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    markIncomplete : async (req, res) => {
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: false
            })
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },
    deleteTodo : async (req,res) => {
        console.log(req)
        try{
            await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile})
            console.log('Deleted Todo')
            res.json('Deleted It')
        }
        catch (err) {
            console.log(err)
        }
    }
}