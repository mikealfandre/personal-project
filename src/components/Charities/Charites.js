import React, { Component } from 'react'
import axios from 'axios'
import './Charities.scss'
import Card from './Card/Card'
import {updateMyList} from './../../Ducks/reducer'
import {connect} from 'react-redux'




class Charities extends Component {
constructor(props) {
    super(props)
    this.state = {
        charities: [],
        charity: {},
        apicharity: {}
        // donationHistory: {},          
    }
}

async componentDidMount(){
    const clientId = 'eb4b49d41f233a8aa5090e258373a27b171af21471de5b488b8c741ac092d7f3';
    //Should I include this in .env and import for security?
    // const {charities} = this.state

    // const {charities} = this.state

    
    await axios.get('https://api.data.charitynavigator.org/v2/Organizations?app_id=79cd9d97&app_key=4417c8a5e6bff925d81c4ea2861f9c28&pageSize=5&rated=true&categoryID=1&minRating=4&scopeOfWork=INTERNATIONAL')
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
        axios.get(`https://api.unsplash.com/photos/random?orientation=landscape&query=${query}&client_id=${clientId}`)
            .then((res) => {
                this.state.charities[i].img = res.data.urls.regular
                //THIS ONLY WORKS IF I SET STATE...WHY? IM SETTING STATE THAT DOESNT EVEN EXIST ON THIS COMPONENT! WHATS THE BEST WAY TO DO TO AXIOS REQUESTS
                this.setState({
                    photo: res.data.urls.small
                })
            })
        console.log('Charities.mission', this.state.charities)
        }
        
        
        // axios.get(`https://api.unsplash.com/photos/random?orientation=landscape&query=cat&client_id=${clientId}`)
        //     .then((res) => {
        //         for (let i = 0; i < this.state.charities.length; i++) {
        //             this.state.charities[i].img = res.data.urls.regular
        //         }
        //         console.log('State Charities 2', this.state.charities)
        //         // console.log('Res.data.urls', res.data.urls.regular)
        //         this.setState({
        //             photo: res.data.urls.small
        //         })
        //     })
        
        
        
        
        
        
        
        

            


        

        
        
        


        // for (let i = 0; i < this.state.charities.length; i++) {
        //     // let query = this.state.charities[i].charityName
        //     console.log('Charities.mission', this.state.charities)
        //     axios.get(`https://api.unsplash.com/photos/random?orientation=landscape&client_id=${clientId}`)
        //         .then((res) => {
        //             this.state.charities[i].img = res.data.urls.regular
        //         })
        //     console.log('Charities.mission', this.state.charities)
        // }

    

        

    

        
            
       
    

        
    
    
        
        
        
    
    
    // .then((res) => {
    //         for (let i = 0; i < res.data.length; i++) {
    //             res.data[i].index = i
    //         }
    //         console.log('res.data', res.data)
    //         this.setState({
    //             charities: res.data,
    //             charity: res.data[0]
    //         })
    //         console.log('State Charities', this.state.charities)
    //     })
    

    


    
    // axios.get('/api/charities')
    //     .then(res => {
    //         for(let i=0; i<res.data.length; i++){
    //             res.data[i].index = i
    //         }
            
    //         this.setState({                   
    //             charities: res.data,
    //             charity: res.data[0]
    //         })
    //         console.log('charities state', this.state.charities)
    //     }).catch(err => {
    //         console.log('charities axios error', err)
    //     })
}

handleAdd = (cid) => {
    
    axios.post(`/api/mylist/${cid}`)
                
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
                        
                    
                <div className="">
                    <div className={`cards-slider active-slide-${charity.index}`}> 
                        <div className="cards-slider-wrapper" style={{
                            'transform': `translateX(-${charity.index * (100 / charities.length)}%)`}}>
                            {
                                charities.map((charity, index) => <Card key={index} img={charity.img} name={charity.charityName} mission={charity.mission} tagline={charity.tagLine} category={charity.category.categoryName} cause={charity.cause.causeName} rating={charity.currentRating.rating} index={charity.index} handleAddFn={this.handleAdd} />)
                            }                       
                            </div>
                        </div>
                </div>        

                <div>{this.state.apicharity.charityName}</div>
                        
        </div>
                        
                                    
    )
}
}

export default connect(null, {updateMyList})(Charities)

                                
                                        
                                

                
                                      

                
            
                
         
                    


