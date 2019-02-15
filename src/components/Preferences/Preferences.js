import React, { Component } from 'react'
import './Preferences.scss'


class Preferences extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            wantsstatement: true,
            wantsupdates: true
        }
    }
    render() {
        return (
            <div className='Preferences-container'>
                
            
            <button></button><p>I would like to receive monthly donation statements</p>
                
                


            </div>
        )
    }
}

export default Preferences