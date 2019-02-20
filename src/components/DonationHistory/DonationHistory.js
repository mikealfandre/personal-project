import React, { Component } from 'react'
import './DonationHistory.scss'
import axios from 'axios'

const clientId = 'eb4b49d41f233a8aa5090e258373a27b171af21471de5b488b8c741ac092d7f3';


class DonationHistory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            photo: ''         
        }
    }
    
    getPhoto = () => {
        axios.get(`https://api.unsplash.com/photos/random?orientation=landscape&query=cat&client_id=${clientId}`)
            .then((res) => {
                console.log('Res.data', res.data)
                console.log('Res.data.urls', res.data.urls.regular)
                this.setState({
                    photo: res.data.urls.small
                })
            })
    }
    render() {
        return (
            <div className='DonationHistory-container'>
                DonationHistory Component

                <img src={this.state.photo} alt=''/>

                <button onClick={() => this.getPhoto()}>Get Photo</button>


            </div>
        )
    }
}

export default DonationHistory