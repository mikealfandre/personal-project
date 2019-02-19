import React, { Component } from 'react'
import './MyList.scss'
import {connect} from 'react-redux'
import {removeCharity} from './../../Ducks/reducer'
import axios from 'axios'

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

    removeCharity = (id) => {

        this.props.removeCharity(id) //REMOVE  FROM DATABASE
    }
    render() {
        
        let showMyList = this.state.mylist.map((charity, index) => {
            return (
                <div className='my-card' key={index}>
                    <button className='remove-button' onClick={() => this.removeCharity(charity.id)}>X</button>
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
            <div className='mylist-container'>
                
                {showMyList}

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