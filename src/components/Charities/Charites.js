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
            })
    }

    handleAdd = (charity) => {
        
         this.props.updateMyList(charity) 
        
    }

    nextCharity = () => {
        //NEEDS TO REFERENCE CHARITY INDEX, OR GIVE CHARITY AN INDEX AND UPDATE STATE...
        
        console.log('state charity before', this.state.charity)
        const newIndex = this.state.charity.index+1
        console.log('new index', newIndex)
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
            <div className="App">
                Charities Component <br/>

                <button
                    onClick={() => this.nextCharity()}
                    disabled={charity.index === charities.length - 1}
                >Next</button>
                <button
                    onClick={() => this.prevCharity()}
                    disabled={charity.index === 0}
                >Prev</button>
                   
                   
                    <div className="col">
                        <div className={`cards-slider active-slide-${charity.index}`}>
                            <div className="cards-slider-wrapper" style={{
                                'transform': `translateX(-${charity.index * (100 / charities.length)}%)`
                            }}>
                                {
                                    charities.map((charity, index) => <Card key={index} charity={charity} img={charity.img} name={charity.name} mission={charity.mission} tagline={charity.tagline} category={charity.category} cause={charity.cause} rating={charity.rating} index={charity.index} handleAddFn={this.handleAdd} />)
                                }                       
                                </div>
                            </div>
                    </div>        

                
            
                
            </div>
        )
    }
}

export default connect(null, {updateMyList})(Charities)



