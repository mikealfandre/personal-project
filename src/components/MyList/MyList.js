import React, { Component } from 'react'
import './MyList.scss'
import {connect} from 'react-redux'
import {removeCharity} from './../../Ducks/reducer'
import axios from 'axios'
import GridCards from '../MaterialUI/GridCards'

class MyList extends Component { 
    constructor(props) {
        super(props)
        this.state = {
            mylist: []
        }
    }

    componentDidMount(){
        axios.get('/api/mylist')
            .then((res) => {
                console.log('MyList res.data', res.data)
                this.setState({
                    mylist: res.data
                })
            })
    }
    
    componentDidUpdate(prevProps) {  
        if (this.props.mylist !== prevProps.mylist) {
            this.fetchData(this.props.mylist);
        }
    }

    removeCharity = (cid) => {
        console.log('cid', cid)
        axios.delete(`/api/mylist/${cid}`)
            .then((res) => {
                this.setState({
                    mylist: res.data
                })
            })
        
    }
    render() {
        
        let showMyList = this.state.mylist.map((charity, index) => {
            // console.log('Charity.id', charity.ch_id)
            // console.log('Charity', charity)
            return (
                <div>
                    <GridCards removeCharity={this.removeCharity} charity={charity} index={index}/> 
                    
                    {/* <div className='my-card' key={index}>
                        <button className='remove-button' onClick={() => this.removeCharity(charity.ch_id)}>X</button>
                        
                        <img src={charity.img} alt=''/>
                        <p>{charity.name}</p>
                        <p>{charity.mission}</p>
                        <p>{charity.tagline}</p>
                        <p>{charity.category}</p>
                        <p>{charity.cause}</p>
                        <p>{charity.rating}</p>
                    </div> */}

                </div>
            )
        })
        return (
            <div className='mylist-container'>
                <div className='mylist-title'>+myList</div>
            
                <div className='mylist-cards-container'>
                    {/* <GridCards /> */}
                    {showMyList}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const {mylist} = state
    return{
        mylist
    }
}

export default connect(mapStateToProps, {removeCharity})(MyList) 