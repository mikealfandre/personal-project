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
    login: async (req, res) => {
        const db = req.app.get('db')
        const {email, password} = req.body
        const {session} = req

        let user = await db.login({email})
        user = user[0]

        if(!user){
            res.status(418).send('No user found!')
            
        }
        let foundUser = bcrypt.compareSync(password, user.password) 
        if(foundUser){
            delete user.password
            session.user = user
            res.status(200).send(session.user)
            
        } else {
            res.status(401).send('Unauthorized')
            
        }
        

    },
    getUser: (req, res) => {
        const { user } = req.session
        
        if (user) {
            res.status(200).send(user)
        } else {
            res.sendStatus(401);
        }
    }

    
}