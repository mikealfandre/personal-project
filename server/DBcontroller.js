

module.exports = {
    getAll: (req, res) => {
        const db = req.app.get('db')

        
        db.get_all_charities()
            .then((charities) => res.status(200).send(charities))
            .catch((err) => res.status(500).send(err))

        // let img = axios.get('https://api.unsplash.com/photos/random')
        //     .then(res => img = res.data)
    }
}