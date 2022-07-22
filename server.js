const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient

app.use(bodyParser.urlencoded({ extended: true }))

app.listen(3000, function(){
    console.log('listening on 3000')
})

MongoClient.connect('mongodb+srv://yoda:Forcebewithyou@cluster0.kij4yep.mongodb.net/?retryWrites=true&w=majority',
{useUnifiedTopology: true})
    .then( client => {
        app.set('view engine', 'ejs')
        

        console.log('Conneted to DB')
        const db = client.db('star-wars-quotes')
        const quotesCollection = db.collection('quotes')

        app.get('/', (req,res) => {
            res.sendFile(__dirname + '/index.html')
        })
        
        app.get('/', (req, res) =>{
            const cursor = db.collection('quotes').find().toArray()
                .then( results => {
                    res.render('index.ejs', {quote: results})
                    console.log(results)
                })
                .catch(err => console.error(err))
                console.log(cursor)
        })
        
        app.post('/quotes', (req, res) => {
            quotesCollection.insertOne(req.body)
                .then(result => {
                    res.redirect('/')
                })
                .catch(err => console.error(err))
        })
    })
    .catch( err => console.error(err))




