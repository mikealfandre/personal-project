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
                Preferences Component
                
                


            </div>
        )
    }
}

export default Preferences