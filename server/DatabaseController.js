

module.exports = {
    getAll: (req, res) => {
        try{
            const db = req.app.get('db')
    
             db.get_all_charities()
                .then((charities) => res.status(200).send(charities))
                
        }
        catch(error){
            console.log('Errorroror', error)
            res.status(300).send(error)
        }
        
    },
    getPreferences: (req, res) => {
        const db = req.app.get('db')

        
        db.get_preferences([giveuser_id])
            .then((preferences) => res.status(200).send(preferences)) 
            .catch((err) => res.status(500).send(err))
   
    },
    updatePreferences: (req, res) => {
        try {
            const db = req.app.get('db')

            const { id } = req.params
            const { email, wants_statement, wants_updates } = req.body
            db.update_preferences([id, email, wants_statement, wants_updates])
            
            
        } catch(error){
            console.log('error with put', error)
            res.status(500).send(error)
        }
    }, 
    addMyList: (req, res) => {
        try {
            const db = req.app.get('db')

            const {cid, uid} = req.params
            db.add_mylist([cid, uid])
                .then((mylist) => res.status(200).send(mylist))

        } catch(error){
            console.log('Add my List error', error)

        }
    }
}