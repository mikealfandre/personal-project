import React, { Component } from 'react'
import './Profile.scss'
import {Link} from 'react-router-dom'
import profileroutes from '../../profileroutes'


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

                        <Link to='/'><li>X</li></Link>
                        <Link to='/profile/preferences'><li>preferences</li></Link>
                        <Link to='/profile/mylist'><li>myList</li></Link>
                        <Link to='/profile/donation-history'><li>Donation History</li></Link>
                        
                    </ul>
                </nav>
                {profileroutes}
                
            </div>
        )
    }
}

export default Profile