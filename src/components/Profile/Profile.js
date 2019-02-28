import React, { Component } from 'react'
import './Profile.scss'
import {Link} from 'react-router-dom'
import profileroutes from '../../profileroutes'
import ExitIconButton from '../MaterialUI/ExitIconButton'



class Profile extends Component {
    constructor(props) {
        super(props)
        
    }
    render() {
        return (
            <div className='profile-container'>
                {/* Profile Component */}
                <div className='exit-button'>
                    <Link to='/' className='link'><ExitIconButton/></Link>
                    {/* <p>exit</p> */}
                </div>
                <nav>
                    <ul className='profile-ul'>

                        <Link to='/profile/preferences' className='link'><li>preferences</li></Link>
                        <Link to='/profile/mylist' className='link'><li>myList</li></Link>
                        <Link to='/profile/donation-history' className='link'><li>Donation History</li></Link>
                        
                    </ul>
                </nav>
                
                {profileroutes}
                
                
            </div>
        )
    }
}

export default Profile