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
                
                this.setState({
                    donations: res.data
                })
            })
    }
    
    
    render() {
        const {donations} = this.state
        
        return (
            <div className='DonationHistory-container'>

            <DonationTable donations={donations}/>
                
            </div>
        )
    }
}

export default DonationHistory