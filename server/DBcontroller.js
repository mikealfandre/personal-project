

module.exports = {
    getAll: (req, res) => {
        const db = req.app.get('db')

        
        db.get_all_charities()
            .then((charities) => res.status(200).send(charities))
            .catch((err) => res.status(500).send(err))

        // let img = axios.get('https://api.unsplash.com/photos/random')
        //     .then(res => img = res.data)
    },
    getPreferences: (req, res) => {
        const db = req.app.get('db')

        
        db.get_preferences()
            .then((preferences) => res.status(200).send(preferences))
            .catch((err) => res.status(500).send(err))
   
    },
    updateEmail: (req, res) => {
        try {
            const db = req.app.get('db')

            const { id } = req.params
            const { email } = req.body
            db.update_email([id, email])
            
            
        } catch(error){
            console.log('error with put', error)
            res.status(500).send(error)
        }






        


       
    }
}