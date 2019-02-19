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
            // donationHistory: {},          
        }
    }
    
    componentDidMount(){
        axios.get('/api/charities')
            .then(res => {
                for(let i=0; i<res.data.length; i++){
                    res.data[i].index = i
                }
                console.log('Res Data', res.data)
                this.setState({                   
                    charities: res.data,
                    charity: res.data[0]
                })
                console.log('charity state', this.state.charity)
            }).catch(err => {
                console.log('charities axios error', err)
            })
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
                        disabled={charity.index === 0}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg" width="60px" height="80px" viewBox="0 0 50 80" space="preserve"
                    >
                        
                        <polyline fill="none" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" points="
	                    45.63,75.8 0.375,38.087 45.63,0.375 "/>
                        
                    </svg>             
                </button>
                  
                <button className='arrow left button-scroll'
                    
                        onClick={() => this.nextCharity()}
                        disabled={charity.index === charities.length - 1}
                >
                
                    <svg
                        xmlns="http://www.w3.org/2000/svg" width="60px" height="80px" viewBox="0 0 50 80" space="preserve"
                    >
                        
                        <polyline fill="none" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" points="
	                    0.375,0.375 45.63,38.087 0.375,75.8 "/>
                    </svg>
                </button>
            </div>

                
                                      
                    <div className="col">
                        <div className={`cards-slider active-slide-${charity.index}`}> 
                            <div className="cards-slider-wrapper" style={{
                                'transform': `translateX(-${charity.index * (100 / charities.length)}%)`
                            }}>
                                {
                                    charities.map((charity, index) => <Card key={index} charity={charity} img={charity.img} name={charity.name} mission={charity.mission} tagline={charity.tagline} category={charity.category} cause={charity.cause} rating={charity.rating} index={charity.index} id={charity.id} handleAddFn={this.handleAdd} />)
                                }                       
                                </div>
                            </div>
                            
                    </div>        

                
            
                
            </div>
        )
    }
}

export default connect(null, {updateMyList})(Charities)



