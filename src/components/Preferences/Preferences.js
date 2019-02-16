import React, { Component } from 'react'
import './Preferences.scss'
import axios from 'axios'


class Preferences extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 0,
            email: '',     
            originalemail: '',
            wantsstatement: true,
            wantsupdates: true,
            editing: false

        }
    }
    

    componentDidMount() {
        axios.get('/api/preferences')
            .then(res => {
                this.originalemail = res.data[0].email
                console.log('Res Data', res.data)
                this.setState({
                    id: res.data[0].giveuser_id,
                    email: res.data[0].email,
                    wantsstatement: res.data[0].wants_statement,
                    wantsupdates: res.data[0].wants_updates,
                    originalemail: res.data[0].email
                })
                
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
        const {id, email} = this.state
        axios.put(`/api/user/${id}`, {email})
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
                    <button onClick={() => { this.cancelEmail(); this.toggleChange()}}>cancel</button>
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

export default Preferences

                
                

