const express = require('express')
require('dotenv').config()
const session = require('express-session')
const massive = require('massive')
const dbcr = require('./DatabaseController')
const authcr = require('./AuthController')


app = express()

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => console.log(`Momentum on ${SERVER_PORT}`))
})

app.use(express.json()) 

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false, 
    maxAge: null
}))


app.get('/api/charities', dbcr.getAll)
// app.get('/api/preferences', dbcr.getPreferences)

app.put('/api/preferences/:id', dbcr.updatePreferences)

app.get('/api/mylist', dbcr.getMyList)
app.post('/api/mylist/:cid', dbcr.addMyList)
app.post('/api/insertcharity', dbcr.insertCharityDB)
app.delete('/api/mylist/:cid', dbcr.removeCharity)

app.get('/auth/user', authcr.getUser)
app.post('/auth/register', authcr.register)
app.post('/auth/login', authcr.login)