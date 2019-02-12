import React, { Component } from 'react'
import axios from 'axios'
import './Charities.scss'

class Charities extends Component {
    constructor(props) {
        super(props)
        this.state = {
            charities: [],
            donationHistory: {},
            myList: [],
        }
    }
    componentDidMount(){
        axios.get('/api/charities')
            .then(res => {
                this.setState({
                    charities: res.data
                })
            })
            console.log('state charities', this.state.charities)

        // axios.get('https://api.unsplash.com/photos/random')
        //     .then(res => {
        //         this.setState({
        //             charities
        //         })
        //     })
    }
    render() {
        console.log('state charities 2', this.state.charities)
        let showCharities = this.state.charities.map((charity, index) => {
            
            return(
                <div className='card' key={index}>
                <img src={charity.img} alt=''/>
                <p>{charity.name}</p>
                <p>{charity.mission}</p>
                <p>{charity.tagline}</p>
                <p>{charity.category}</p>
                <p>{charity.cause}</p>
                <p>{charity.rating}</p>
                </div>
            )
        })
        return (
            <div className='charities-container'>
                Charities Component
            
                
                {showCharities}
                
                <button>$0.50</button>
                <button>$5.00</button>
                <button>$25.00</button>
            </div>
        )
    }
}

export default Charities
                
                
                