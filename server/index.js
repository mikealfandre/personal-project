const express = require('express')
require('dotenv').config()
const session = require('express-session')
const massive = require('massive')
const dbcr = require('./DatabaseController')
const authcr = require('./AuthController')

const path = require('path'); // Usually moved to the start of file



app = express()

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => (`Momentum on ${SERVER_PORT}`))
})

app.use(express.json()) 

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false, 
    maxAge: null
}))

app.use(express.static(`${__dirname}/../build`));


app.get('/api/charities', dbcr.getAll)
// app.get('/api/preferences', dbcr.getPreferences)

app.put('/api/preferences/:id', dbcr.updatePreferences) 
app.post('/api/donations', dbcr.addDonation)
app.get('/api/donations', dbcr.getDonations)

app.get('/api/mylist', dbcr.getMyList)
app.post('/api/mylist/:cid', dbcr.addMyList)
app.post('/api/insertcharity', dbcr.insertCharityDB) 
app.delete('/api/mylist/:cid', dbcr.removeCharity)

app.get('/auth/user', authcr.getUser)
app.post('/auth/register', authcr.register)
app.post('/auth/login', authcr.login)




//ONLY NEED THIS IF USING BROWSERROUTER, WHICH IM NOT, IM USING HASH ROUTER
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'));
});