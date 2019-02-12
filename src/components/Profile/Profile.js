import React, { Component } from 'react'
import './Profile.scss'
import {Link} from 'react-router-dom'
import MyList from '../MyList/MyList'
import DonationHistory from '../DonationHistory/DonationHistory'

class Profile extends Component {
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
            <div className='profile-container'>
                Profile Component
                <nav>
                    <ul>
                        <Link to={Profile}><li>preferences</li></Link>
                        <Link to={MyList}><li>myList</li></Link>
                        <Link to={DonationHistory}><li>Donation History</li></Link>
                        
                    </ul>
                </nav>
                
            </div>
        )
    }
}

export default Profile