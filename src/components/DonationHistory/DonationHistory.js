import React, { Component } from 'react'
import './DonationHistory.scss'
import axios from 'axios'
import DonationTable from './../MaterialUI/DonationTable'


class DonationHistory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            donations: []         
        }
    }

    componentDidMount(){
        axios.get('/api/donations')
            .then((res) => {
                console.log('doantion res.data', res.data)
                this.setState({
                    donations: res.data
                })
            })
    }
    
    
    render() {
        const {donations} = this.state
        console.log('Donations', this.state.donations)
        return (
            <div className='DonationHistory-container'>

            <DonationTable donations={donations}/>
                

                {/* {
                    donations.map((donation, index) => 
                        <div key={index}>
                            <p>{donation.charity_name}</p>
                            <p>{donation.amount}</p>
                            <p>{donation.date}</p>
                        </div>)
                } */}
            </div>
        )
    }
}

export default DonationHistory