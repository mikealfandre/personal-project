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
    shuffleCards =(array)=> {

        let i = array.length, j = 0, temp;

        while (i--) {
            j = Math.floor(Math.random() * (i + 1));

            temp = array[i];
            array[i] = array[j];
            array[j] = temp;

        }
        return array;

    }

async componentDidMount(){
    
    
    await axios.get(`https://api.data.charitynavigator.org/v2/Organizations?app_id=${process.env.REACT_APP_CHARITY_ID}&app_key=${process.env.REACT_APP_CHARITY_KEY}&pageSize=15&rated=true&minRating=2&scopeOfWork=NATIONAL`)
        .then((res) => {
            // for (let i = 0; i < res.data.length; i++) {
            //     res.data[i].index = i
            // }
            console.log('after response res.data', res.data) 

           let shuffleArray = this.shuffleCards(res.data)
            
            // console.log('after shuffle res.data', shuffleArray)

            for (let i = 0; i < shuffleArray.length; i++) {
                shuffleArray[i].index = i
            }

            
            this.setState({
                charities: shuffleArray,
                charity: shuffleArray[0]
                // charity: res.data[0]
            })    

        })

    for (let i = 0; i < this.state.charities.length; i++) {
    let query = this.state.charities[i].cause.causeName
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
    

    await this.setState({
        timestamp: sendTimeStamp
    })
    
    
    const {amount, timestamp} = this.state
    const {charityName : charity_name} = this.state.charity


    axios.post('/api/donations', {amount, timestamp, charity_name})
        .catch((err) => console.log('HandD Error', err))
        
        
}

handleAdd = (charity) => {
    axios.post('/api/insertcharity', {charity})
    .then((res) => {
        
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
    
}

prevCharity = () => {
    
    const newIndex = this.state.charity.index-1
    this.setState({
        charity: this.state.charities[newIndex]
    })
}


render() {
    const {charities, charity} = this.state  
    const {loggedin} = this.props
    
    
            
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
                                charities.map((charity, index) => <Card key={index} loggedin={loggedin} charity={charity} img={charity.img} name={charity.charityName} mission={charity.mission} tagline={charity.tagLine} category={charity.category.categoryName} cause={charity.cause.causeName} rating={charity.currentRating.rating} index={charity.index} handleAddFn={this.handleAdd} />)
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

                                
                                        
                                

                
                                      

                
            
                
         
                    


