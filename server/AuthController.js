const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        const {email, password} = req.body
        const {session} = req
        const db = req.app.get('db')
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        let newUser = await db.register({email, password: hash})
        newUser = newUser[0]

        session.user = {...newUser}
        res.status(201).send(session.user) 
    }, 
    getUser: (req, res) => {
        const { user } = req.session
        console.log('User', user)
        if (user) {
            res.status(200).send(user)
        } else {
            res.sendStatus(401);
        }
    }

    
}