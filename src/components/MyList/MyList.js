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
       
        axios.delete(`/api/mylist/${cid}`)
            .then((res) => {
                this.setState({
                    mylist: res.data
                })
            })
        
    }
    render() {
        
        let showMyList = this.state.mylist.map((charity, index) => {
            
            return (
                <div>
                    <GridCards removeCharity={this.removeCharity} charity={charity} index={index}/> 
                </div>
            )
        })
        return (
            <div className='mylist-container'>
                
            
                <div className='mylist-cards-container'>
            
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