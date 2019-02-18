import React, { Component } from 'react'
import './Preferences.scss'
import axios from 'axios'
import {connect} from 'react-redux';


class Preferences extends Component {
    constructor(props) {
        super(props)
        this.state = {
            giveuser_id: 0,
            email: '',     
            originalemail: '',
            wantsstatement: true,
            wantsupdates: true,
            editing: false
        }
    }
    

    componentDidMount() {
        const {giveuser_id, email, originalemail, wants_statement, wants_updates} = this.props
        this.setState({
            giveuser_id,
            email,
            originalemail,
            wants_statement,
            wants_updates
        })
       
    }
    toggleChange = () => {
        this.setState({
            editing: !this.state.editing
        })      
    }
    
    handleEmailChange = (value) => {
        this.setState({
            email: value
        })
    }

    updateEmail = () => {
        const {giveuser_id, email} = this.state
        axios.put(`/api/user/${giveuser_id}`, {email})
         .then((res) => {
            this.setState({
                email: res.data
            }) 
            .catch((err) => res.status(500).send(err))
         })
         
    }

    cancelEmail = () => {
        this.setState({
            email: this.state.originalemail
        })
    }

    render() {
        const {editing, email, wantsstatement, wantsupdates} = this.state
        console.log('Pref State', this.state)
        console.log('editing', this.state.editing)
        console.log(this.state.email)
        return (
            <div className='Preferences-container'>
                
            
            <button></button><p>I would like to receive monthly donation statements</p>
            
            <button></button><p>I would like to receive updates on charities I have donated to</p>

            <br/>Preferred contact email
            
            <br/>

            {
                editing
                ?
                <div>
                    <textarea value={email} onChange={(e) => this.handleEmailChange(e.target.value)}></textarea>
                    <button onClick={() => {this.updateEmail(); this.toggleChange()}}>update</button>
                    <button onClick={() => {this.cancelEmail(); this.toggleChange()}}>cancel</button>
                </div>
                :
                <div>
                    <p>{email}</p>
                    <button onClick={() => this.toggleChange()} >change</button>
                </div>
            }

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const {giveuser_id, email, wants_statement, wants_updates} = state
    return{
        giveuser_id,
        originalemail: email,
        email,
        wants_statement,
        wants_updates
    }
}

export default connect(mapStateToProps)(Preferences) 

                
                

