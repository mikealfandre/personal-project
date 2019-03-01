import React, { Component } from 'react'
import axios from 'axios'
import './Charities.scss'
import Card from './Card/Card'
import {updateMyList} from './../../Ducks/reducer'
import {connect} from 'react-redux'
import DonateButton1 from './../MaterialUI/DonateButton1'
import DonateButton2 from './../MaterialUI/DonateButton2'
import DonateButton3 from './../MaterialUI/DonateButton3'





class Charities extends Component {
constructor(props) {
    super(props)
    this.state = {
        charities: [],
        charity: {},
        alreadyinlist: '',
        amount: 0.00,
        timestamp: []      
    }
}

async componentDidMount(){
    
    
    console.log(process.env.REACT_APP_charity_url)
    console.log(process.env.REACT_APP_UNSPLASH_ID)
    
    await axios.get(`${process.env.REACT_APP_charity_url}`)
        .then((res) => {
            for (let i = 0; i < res.data.length; i++) {
                res.data[i].index = i
            }
            console.log('res.data', res.data)
            this.setState({
                charities: res.data,
                charity: res.data[0]
            })    

        })

    for (let i = 0; i < this.state.charities.length; i++) {
    let query = this.state.charities[i].charityName
    console.log('Charities.mission', this.state.charities)
        axios.get(`https://api.unsplash.com/photos/random?orientation=landscape&query=${query}&client_id=${process.env.REACT_APP_UNSPLASH_ID}`)
        .then((res) => {
            this.state.charities[i].img = res.data.urls.regular
            //THIS ONLY WORKS IF I SET STATE...WHY? IM SETTING STATE THAT DOESNT EVEN EXIST ON THIS COMPONENT! WHATS THE BEST WAY TO DO TO AXIOS REQUESTS
            this.setState({
                photo: res.data.urls.small
            })
        })
    console.log('Charities.mission', this.state.charities)
    }   
}

handleDonation = async (value) => {
    
    
    // console.log('Value', value)
    // console.log('CharityName', charity_name)
    
    await this.setState({
        amount: value
    })
    
    const stamp = new Date();
    const day = stamp.getDate();
    const month = stamp.getMonth();
    const year = stamp.getFullYear();
    const sendTimeStamp = (month+1) + ' / ' + day + ' / ' + year
    console.log('sendtimestamp', sendTimeStamp)
    console.log('stamp', stamp)

    await this.setState({
        timestamp: sendTimeStamp
    })
    console.log('state timestamp', this.state.timestamp)
    
    const {amount, timestamp} = this.state
    const {charityName : charity_name} = this.state.charity

    // console.log('State Donation after Click', this.state.amount)
    // console.log('timestamp', this.state.timestamp)

    axios.post('/api/donations', {amount, timestamp, charity_name})
        .catch((err) => console.log('HandD Error', err))
        
        
}

handleAdd = (charity) => {
    axios.post('/api/insertcharity', {charity})
    .then((res) => {
        console.log('res.data.cid?', res.data)
        console.log('res.data.cid2?', res.data[0].ch_id)
        axios.post(`/api/mylist/${res.data[0].ch_id}`)
            .then((res) => {
                this.setState({
                    alreadyinlist: res.data
                })
            })
    })      
}

nextCharity = () => {
    //NEEDS TO REFERENCE CHARITY INDEX, OR GIVE CHARITY AN INDEX AND UPDATE STATE...
    
    const newIndex = this.state.charity.index+1
    this.setState({
        charity: this.state.charities[newIndex]
    })
    console.log('state charity After',this.state.charity)
}

prevCharity = () => {
    console.log('index PREV', this.state.charity.index)
    
    const newIndex = this.state.charity.index-1
    this.setState({
        charity: this.state.charities[newIndex]
    })
}


render() {
    const {charities, charity} = this.state 
    console.log(this.state.timestamp)
    
            
    return (
        <div className="charities-container">

                {/* BUTTONS */}
                <div className='button-scroll-container'>
                    <button className='arrow right button-scroll'                 
                            onClick={() => this.prevCharity()}
                            disabled={charity.index === 0}>
                        
                        <svg
                            xmlns="http://www.w3.org/2000/svg" width="60px" height="80px" viewBox="0 0 50 80" space="preserve"
                        >
                            <polyline fill="none" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" points="
                            45.63,75.8 0.375,38.087 45.63,0.375 "/>
                        </svg>             
                    </button>
                            
                    <button className='arrow left button-scroll'
                            onClick={() => this.nextCharity()}
                            disabled={charity.index === charities.length - 1}>
                    
                        <svg
                            xmlns="http://www.w3.org/2000/svg" width="60px" height="80px" viewBox="0 0 50 80" space="preserve"
                        >
                            <polyline fill="none" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" points="
                            0.375,0.375 45.63,38.087 0.375,75.8 "/>
                        </svg>
                    </button>
                </div>  
                        
                    
                
                    <div className={`cards-slider active-slide-${charity.index}`}> 

                    

                        

                        <div className="cards-slider-wrapper" style={{
                            'transform': `translateX(-${charity.index * (100 / charities.length)}%)`}}>
                            {
                                charities.map((charity, index) => <Card key={index} charity={charity} img={charity.img} name={charity.charityName} mission={charity.mission} tagline={charity.tagLine} category={charity.category.categoryName} cause={charity.cause.causeName} rating={charity.currentRating.rating} index={charity.index} handleAddFn={this.handleAdd} />)
                            }       
                        </div>
                        
                            <DonateButton1 handleDonationFn={this.handleDonation}/> 
                            <DonateButton2 handleDonationFn={this.handleDonation} />
                            <DonateButton3 handleDonationFn={this.handleDonation} />

                            {/* <div>TimeStamp: {day} / {month+1} / {year}</div> */}
                            {/* <div>{this.state.timestamp}</div> */}

                            {/* {
                                this.state.timestamp.map((timestamp, index) => <div key={index}>{timestamp}</div>)
                            } */}
                                
                    </div>
                     

                
                        
        </div>
                        
                                    
    )
}
}

export default connect(null, {updateMyList})(Charities)

                                
                                        
                                

                
                                      

                
            
                
         
                    


