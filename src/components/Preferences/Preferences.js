import React, { Component } from 'react'
import './Preferences.scss'
import axios from 'axios'
import {connect} from 'react-redux';
import {updateUser} from './../../Ducks/reducer'


class Preferences extends Component {
    constructor(props) {
        super(props)
        this.state = {
            giveuser_id: 0,
            email: '',     
            originalemail: '',
            wants_statement: true,
            wants_updates: true,
            editing: false
        }
    }
    

    componentDidMount() {
        const {giveuser_id, email, wants_statement, wants_updates} = this.props
        this.setState({
            giveuser_id,
            email: email,
            originalemail: email,
            wants_statement,
            wants_updates
        })
        console.log('Comp Render State', this.state)
       
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
    handleStToggle = () => {
        this.setState({
            wants_statement: !this.state.wants_statement
        })
    }
    handleUpToggle = () => {
        this.setState({
            wants_updates: !this.state.wants_updates
        })
    }

    updatePreferences = () => {
        const {giveuser_id, email, wants_statement, wants_updates} = this.state
        axios.put(`/api/preferences/${giveuser_id}`, {email, wants_statement, wants_updates})
        .then((res) => {
            this.props.updateUser(res.data[0]) 
            this.setState({
                email: res.data[0].email,
                wants_statement: res.data[0].wants_statement,
                wants_updates: res.data[0].wants_updates
            }) 
            // .catch((err) => res.status(500).send(err)) **WHEN ACTIVATED THROWS ERROR SAYING CANT READ CATCH 'EMAIL' UNDEFINED
         })
         
    }

    cancelEmail = () => {
        this.setState({
            email: this.state.originalemail
        })
    }

    render() {
        const {editing, email, wants_statement, wants_updates} = this.state
        console.log('Start State', this.state)
        
        return (
            <div className='Preferences-container'>
                
            
            <input type='checkbox' value={wants_statement} onChange={() => this.handleStToggle()} checked={this.state.wants_statement}/><p>I would like to receive monthly donation statements</p>
            <input type='checkbox' value={wants_updates} onChange={() => this.handleUpToggle()} checked={this.state.wants_updates} /><p>I would like to receive updates on charities I have donated to</p>
            
            

            <br/>Preferred contact email
            
            <br/>

            {
                editing
                ?
                <div>
                    <textarea value={email} onChange={(e) => this.handleEmailChange(e.target.value)}></textarea>
                    <button onClick={() => this.toggleChange()}>update</button>
                    <button onClick={() => {this.cancelEmail(); this.toggleChange()}}>cancel</button>
                </div>
                :
                <div>
                    <p>{email}</p>
                    <button onClick={() => this.toggleChange()} >change</button>
                </div>
            }

                <button onClick={() => this.updatePreferences()} >Save Preferences</button>

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

export default connect(mapStateToProps, {updateUser})(Preferences) 

                
                

