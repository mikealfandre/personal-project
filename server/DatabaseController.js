

module.exports = {
    getAll: (req, res) => {
        try {
            const db = req.app.get('db')

            db.get_all_charities()
                .then((charities) => res.status(200).send(charities))

        }
        catch (error) {
            ('Errorroror', error)
            res.status(300).send(error)
        }

    },
    // getPreferences: (req, res) => {
    //     const db = req.app.get('db')


    //     db.get_preferences([giveuser_id])
    //         .then((preferences) => res.status(200).send(preferences))  
    //         .catch((err) => res.status(500).send(err))

    // },
    updatePreferences: (req, res) => {
        try {
            const db = req.app.get('db')

            const { id } = req.params
            const { email, wants_statement, wants_updates } = req.body
            db.update_preferences([id, email, wants_statement, wants_updates])
                .then((preferences) => res.status(200).send(preferences))


        } catch (error) {
            ('error with put', error)
            res.status(500).send(error)
        }
    },
    insertCharityDB: (req, res) => {
        try {
            ('InsertCharityFired')
            const db = req.app.get('db')
            const { charity } = req.body

            db.insert_charity_db([charity.charityName, charity.mission, charity.tagLine, charity.category.categoryName, charity.cause.causeName, charity.currentRating.rating, charity.img, charity.websiteURL, charity.ein, charity.category.categoryID, charity.cause.causeID, charity.irsClassification.nteeType])
                .then((ch_id) => res.status(200).send(ch_id))

        } catch (error) {
            ('Add my List error', error)

        }
    },
    addMyList: (req, res) => {
        try {
            // ('FIRED')
            const db = req.app.get('db')
            // ('req.params', req.params)
            // ('req.session', req.session)

            const { cid } = req.params
            const { giveuser_id } = req.session.user
            const alreadyInList = 'Already in your list!'

            db.check_if_in_mylist([giveuser_id, cid])
                .then(charity => {
                    ('charity', charity)
                    if (!charity[0]) {
                        db.add_mylist([giveuser_id, cid])
                            .then((mylist) => res.status(200).send(mylist))
                    } else {
                        res.status(200).send(alreadyInList)
                        ('Errorrrzzzzz')
                    }
                })

            } catch (error) {
                ('Add my List error', error)
            }

    },
    getMyList: (req, res) => {
        const db = req.app.get('db')
        const { giveuser_id } = req.session.user
        db.get_mylist([giveuser_id])
            .then((mylist) => res.status(200).send(mylist)) 
            .catch((err) => ('err', err))
    },
    removeCharity: (req, res) => {
        const db = req.app.get('db')
        const { giveuser_id } = req.session.user
        const { cid } = req.params //What's difference between putting this on params or putting it on req.body?

        (cid)
        (giveuser_id)
        db.remove_charity([cid, giveuser_id])
            .then((mylist) => res.status(200).send(mylist))
            .catch((err) => res.status(500).send(err))
    },
    addDonation: (req, res) => {
        const db = req.app.get('db')
        const {giveuser_id} = req.session.user
        const {charity_name, amount, timestamp} = req.body
        (charity_name, amount, timestamp)

        db.add_donation([amount, timestamp, charity_name, giveuser_id])
    },
    getDonations: (req, res) => {
        ('getDonations backend fired')
        const db = req.app.get('db')
        const {giveuser_id} = req.session.user
        ('GiveuserID', giveuser_id)

        db.get_donations([giveuser_id])
            .then((donations) => {res.status(200).send(donations)})
            .catch((err) => res.status(500).send(('This is the backend Error', err)) )
            
    }
}